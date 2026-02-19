"use client";

import clsx from "clsx";
import styles from "./CalcSection.module.scss";
import { useEffect, useState } from "react";
import NiceModal from "@ebay/nice-modal-react";
import ConfirmModal from "@/component/modal/ConfirmModal/ConfirmModal";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import type { Variants } from "motion/react";
import {
  animate,
  useMotionValue,
  useTransform,
  useMotionValueEvent,
} from "motion/react";

import { Bar } from "react-chartjs-2";
import annotationPlugin from "chartjs-plugin-annotation";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  annotationPlugin,
);

export function BadgeBox() {
  const badgeAni: Variants = {
    offscreen: { scale: 1.05, opacity: 0 },
    onscreen: ({ delay }: { delay: number }) => ({
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1,
        delay: delay,
        velocity: 10,
      },
    }),
  };

  return (
    <div className={styles.badge_box}>
      <motion.figure
        className={clsx(styles.badge, styles.sales)}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: 0.3, once: true }}
        variants={badgeAni}
        custom={{ delay: 0.7 }}
      >
        <img src="/img/calc/sales_badge.png" alt="월 매출 3000" />
        <h3 className={clsx(styles.count_txt, "paperLogy")}>
          <motion.small
            variants={{
              offscreen: { opacity: 0 },
              onscreen: {
                opacity: 1,
                transition: { duration: 0.5, delay: 0.9 },
              },
            }}
          >
            약
          </motion.small>

          <motion.span
            variants={{
              offscreen: { scale: 1.5, opacity: 0 },
              onscreen: {
                scale: 1,
                opacity: 1,
                transition: { type: "spring", duration: 0.5, delay: 0.9 },
              },
            }}
          >
            <Counter from={0} to={3000} duration={4} />
            만원
          </motion.span>
        </h3>
      </motion.figure>

      <motion.figure
        className={clsx(styles.badge, styles.profits)}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: 0.3, once: true }}
        variants={badgeAni}
        custom={{ delay: 1 }}
      >
        <img src="/img/calc/profits_badge.png" alt="점주 순이익 3000~4000" />
        <h3 className={clsx(styles.count_txt, "paperLogy")}>
          <motion.small
            variants={{
              offscreen: { opacity: 0 },
              onscreen: {
                opacity: 1,
                transition: { duration: 0.5, delay: 1.5 },
              },
            }}
          >
            약
          </motion.small>
          <motion.span
            variants={{
              offscreen: { scale: 1.5, opacity: 0 },
              onscreen: {
                scale: 1,
                opacity: 1,
                transition: { type: "spring", duration: 0.5, delay: 1.5 },
              },
            }}
          >
            30~40%
          </motion.span>
        </h3>
      </motion.figure>
    </div>
  );
}

type CounterProps = {
  from?: number;
  to: number;
  duration?: number;
};

// 숫자 카운트 from: 시작값, to: 최종값
export function Counter({ from = 0, to, duration = 2 }: CounterProps) {
  const count = useMotionValue(from);

  const rounded = useTransform(count, (latest) => Math.floor(latest));

  const [display, setDisplay] = useState(from);

  useMotionValueEvent(rounded, "change", (latest) => {
    setDisplay(latest);
  });

  useEffect(() => {
    count.set(from);

    const controls = animate(count, to, {
      duration,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [from, to, duration, count]);

  return <b>{display}</b>;
}


// 수익 계산기
export function Caculator() {

  // 기준 투자금 : 투자금 변동 되면 parseFloat 꼭 수정하기, RecoveryChart도 수정하기
  const TARGET_AMOUNT = 150000000;
  const AMOUNT_Txt = parseFloat((TARGET_AMOUNT / 100000000).toFixed(1));

  const [value, setValue] = useState({
    expectedSales: "",
    rent: "",
    maintenance: "",
    extraCost: "",
  });

  const [total, setTotal] = useState<number>(0);
  const [totalDate, setTotalDate] = useState<string>("");
  const [chartDatas, setChartDatas] = useState<number[]>([]);
  const [chartActive, setChartActive] = useState<boolean>(false);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const toNumber = (value: string) => Number(value.replace(/,/g, "")) || 0;

  const numbers = {
    expectedSales: toNumber(value.expectedSales),
    rent: toNumber(value.rent),
    maintenance: toNumber(value.maintenance),
    extraCost: toNumber(value.extraCost),
  };

  // 계산 버튼 클릭 시 이동
  const resultAnchor = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    // :root에 설정된 --header-h 값 가져옴.
    const headerH =
      parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--header-h",
        ),
      ) || 0;
    // 사파리에서도 적용 잘 되는데 만약 버벅이면 getComputedStyle 문제임.

    const y = el.getBoundingClientRect().top + window.scrollY - (headerH + 30);

    window.scrollTo({ top: y, behavior: "smooth" });
  };


  // 계산식
  const caculator = () => {
    if (
      numbers.expectedSales <= 0 ||
      numbers.rent <= 0 ||
      numbers.maintenance <= 0
    ) {
      NiceModal.show(ConfirmModal, {
        message: "예상 매출액, 월세, 관리비를 모두 입력해 주세요.",
        autoClose: 1500,
      });
      return;
    }

    // 1. 예상 매출액이 3000만원 이상이면
    // 실 매출액 = 3000만원의 30% + 초과분 1만원의 35% 

    // 2. 매출액이 3000만원 미만이면
    // 실 매출액 = 2999만원의 30%

    // 순이익 = 실 매출액 - (월세 + 관리비 + 기타)
    // 회수기간 개월수 = 1억5천(투자금) / 순이익


    // 매출액 계산
    let expectedSalesProfit = 0;
    const cutlineProfit = 30000000; // 예상 월 매출

    if(numbers.expectedSales >= cutlineProfit) { // 3000만원 이상
      const baseProfit = cutlineProfit * 0.3;
      const excessProfit = (numbers.expectedSales - cutlineProfit) * 0.35;
      expectedSalesProfit = baseProfit + excessProfit;
      
      // console.log('3000 이상',excessProfit);

    } else if (numbers.expectedSales < cutlineProfit) { // 3000만원 미만

      expectedSalesProfit = Math.floor(numbers.expectedSales * 0.3);
      // console.log('3000 미만', expectedSalesProfit);
    }

    const inputTotal =
      expectedSalesProfit -
      (numbers.rent + numbers.maintenance + numbers.extraCost);

    // 총 순이익
    setTotal(inputTotal);
    console.log("월 순이익:", inputTotal);

    const date = TARGET_AMOUNT / inputTotal;
    const minDate = Math.floor(date);
    const maxDate = Math.ceil(date);

    // console.log(`투자회수기간:${date}`, minDate, "~", maxDate);

    // 총 투자회수기간
    let dateText = "";

    if (maxDate > 24) {
      // 1. maxDate가 24보다 크면 "24개월 이상"으로 고정
      dateText = "24개월 이상";
    } else if (minDate === maxDate) {
      // 2. 값이 정수로 떨어지면 하나만 표시
      dateText = `${maxDate}개월`;
    } else {
      // 3. 그 외에는 범위로 표시
      dateText = `${minDate}개월 ~ ${maxDate}개월`;
    }
    setTotalDate(dateText);

    const chartData: number[] = [];

    const chartMaxDate = maxDate > 24 ? 24 : maxDate;

    for (let i = 1; i <= chartMaxDate; i++) {
      chartData.push(inputTotal * i);
    }

    resultAnchor("calc_result");

    setChartDatas(chartData); // 그래프

    setChartActive(true);
  };


  // 순이익 표시 필터
  const formatCurrency = (value: number) => {
    if (value <= 0) return "0원";

    if (value >= 100000000) {
      // 1. 1억 원 이상 (예: 1.2억원)
      const eok = value / 100000000;
      // 소수점 1자리까지 표시하고, .0으로 끝나면 정수로 표시
      return `${Number(eok.toFixed(1)).toLocaleString()}억원`;
    }

    if (value >= 100000) {
      // 2. 10만 원 이상 (예: 150만원)
      const man = Math.floor(value / 10000);
      return `${man.toLocaleString()}만원`;
    }

    // 3. 10만 원 미만 (예: 9,500원)
    return `${value.toLocaleString()}원`;
  };

  return (
    <section className={styles.Calculator} id={"calc_sec"}>
      <div className={styles.calc_header}>
        <motion.div
          className={styles.calc_title}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ amount: 0.5, once: true }}
          variants={{
            offscreen: { y: -20, opacity: 0 },
            onscreen: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.5, delay: 0.3 },
            },
          }}
        >
          <h2 className="paperLogy">
            수익 회수계산기로 <br />
            직접 계산해 보세요!
          </h2>

          <p className="paperLogy">
            초기 투자 비용과 예상 매출을 입력하면 <br />내 상황에 맞는
            회수기간을 확인하실 수 있습니다.
          </p>
        </motion.div>

        <motion.article
          className={styles.calc_input_box}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ amount: 0.5, once: true }}
          variants={{
            offscreen: { y: -20, opacity: 0 },
            onscreen: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.5, delay: 0.3 },
            },
          }}
        >
          <div className={styles.calc_input_header}>
            {/* <input type="text" placeholder="투자금(1.2억)" readOnly /> */}
            <p>기본 투자금 : {AMOUNT_Txt}억</p>
          </div>

          <div className={styles.input_group}>
            <div className={styles.input_item}>
              <label className={clsx(styles.tag, styles.required)}>
                <span>예상 매출</span>
              </label>
              <CalcInput
                placeholder="예상 매출을 입력해 주세요."
                value={value.expectedSales}
                setValue={(v) => setValue({ ...value, expectedSales: v })}
                TargetAmount={TARGET_AMOUNT}
              />
            </div>

            <div className={styles.input_item}>
              <label className={clsx(styles.tag, styles.required)}>
                <span>월세</span>
              </label>
              <CalcInput
                placeholder="예상 월세를 입력해 주세요."
                value={value.rent}
                setValue={(v) => setValue({ ...value, rent: v })}
                TargetAmount={TARGET_AMOUNT}
              />
            </div>

            <div className={styles.input_item}>
              <label className={clsx(styles.tag, styles.required)}>
                <span>관리비</span>
              </label>
              <CalcInput
                placeholder="관리비를 입력해 주세요."
                value={value.maintenance}
                setValue={(v) => setValue({ ...value, maintenance: v })}
                TargetAmount={TARGET_AMOUNT}
              />
            </div>

            <div className={styles.input_item}>
              <label className={clsx(styles.tag)}>
                <span>
                  기타 <small>(선택사항)</small>
                </span>
              </label>
              <CalcInput
                placeholder="기타 비용을 입력해 주세요."
                value={value.extraCost}
                setValue={(v) => setValue({ ...value, extraCost: v })}
                TargetAmount={TARGET_AMOUNT}
              />
            </div>
          </div>

          <button
            className={clsx(styles.calc_submit, "paperLogy")}
            onClick={() => {
              caculator();
            }}
          >
            계산하기
          </button>
        </motion.article>
      </div>

      <div id="calc_result" className={styles.anchor_dummy}></div>
      {chartActive && (
        <AnimatePresence>
          <motion.div
            className={styles.calc_result_box}
            key={total}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            // id="calc_result"
            // initial='offscreen'
            // whileInView='onscreen'
            // viewport={{amount: 0.5, once: true}}
            // variants={{
            //     offscreen: { y: -20, opacity: 0,},
            //     onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.3,},},
            // }}
          >
            <article className={styles.result_window}>
              {total > 0 && chartActive && (
                <AnimatePresence>
                  <motion.div
                    className={styles.data_box}
                    key={total}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* <div className="result1">월 순이익 추정치: {total || 0}</div> */}
                    <p className={clsx(styles.month_result, "paperLogy")}>
                      투자회수기간 : <span>{totalDate}</span>
                    </p>

                    <RecoveryChart
                      chartDatas={chartDatas}
                      inputTotal={total}
                      amount={TARGET_AMOUNT}
                    />

                    
                    <p className={styles.chart_guide}>
                      {
                        !isMobile ? 
                          '그래프에 마우스를 올리면 수익률이 표시됩니다.'
                        : '그래프를 터치하면 수익률이 표시됩니다.'
                      }
                    </p>
                  </motion.div>
                </AnimatePresence>
              )}

              {(total < 0 || total === 0) && chartActive && (
                <AnimatePresence>
                  <motion.div
                    className={styles.not_data_txt}
                    key={total}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    현재 입력 조건에서는 투자금 회수가 불가능합니다.
                  </motion.div>
                </AnimatePresence>
              )}

              {total === 0 && !chartActive && (
                <AnimatePresence>
                  <motion.div
                    className={styles.not_data_txt}
                    key={total}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    예상되는 수익을 계산해 주세요.
                  </motion.div>
                </AnimatePresence>
              )}
            </article>

            {total > 0 && chartActive && (
              <AnimatePresence>
                <motion.div
                  className={styles.profit}
                  key={total}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="paperLogy">
                    예상 월 순이익 추정치 : <b>{formatCurrency(total)}</b>
                  </span>
                </motion.div>
              </AnimatePresence>
            )}
          </motion.div>
        </AnimatePresence>
      )}
    </section>
  );
}

// 인풋
function CalcInput({
  placeholder,
  value,
  setValue,
  TargetAmount,
}: {
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
  TargetAmount: number;
}) {
  const [displayValue, setDisplayValue] = useState(""); // 인풋에 표시되는 단위
  const [displayText, setDisplayText] = useState(""); // 만원 단위 표시

  const InputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/[^0-9]/g, "");

    // 2. 빈 값 처리
    if (!rawValue) {
      setValue("");
      setDisplayValue("");
      setDisplayText("");
      return;
    }

    const numValue = parseInt(rawValue, 10);
    const DefaultAmount = 10000;
    const TargetAmountValue = TargetAmount / DefaultAmount;

    if (numValue > TargetAmountValue) return;
    setDisplayValue(numValue.toLocaleString());

    // 3. 부모 상태(setValue)로 보낼 때만 10,000을 곱함
    const calculatedValue = (numValue * DefaultAmount).toString();
    setValue(calculatedValue);

    // 4. 한글 단위 계산 (동일)
    const totalAmount = numValue * DefaultAmount;
    let resultText = "";
    if (totalAmount >= 100000000) {
      const uk = Math.floor(totalAmount / 100000000);
      const man = Math.floor((totalAmount % 100000000) / DefaultAmount);
      resultText =
        man > 0
          ? `${uk.toLocaleString()}억 ${man.toLocaleString()}만원`
          : `${uk.toLocaleString()}억`;
    } else {
      resultText = `${numValue.toLocaleString()}만원`;
    }
    setDisplayText(resultText);
  };

  return (
    <div className={styles.input_body}>
      <input
        value={displayValue}
        type="text"
        maxLength={25}
        placeholder={placeholder}
        onChange={InputChange}
      />
      <span>{displayText}</span>
    </div>
  );
}

// 차트
interface Props {
  chartDatas: number[];
  inputTotal: number; // 월 순이익
  amount: number;
}

const RecoveryChart = ({ chartDatas, inputTotal, amount }: Props) => {
  const GOAL = amount; // 1.5억
  const GOAL_txt = GOAL / 100000000;

  // 1. Y축 최대값 결정 로직
  // 데이터 중 가장 큰 값(마지막 개월차 누적액)과 목표액 중 더 큰 것을 찾음
  const lastCumulativeProfit = chartDatas[chartDatas.length - 1] || 0;
  // const maxDataValue = Math.max(lastCumulativeProfit, GOAL);
  
  // 그래프 상단에 10% 정도 여유 공간 생성 (가독성 목적)
  const yAxisMax = lastCumulativeProfit > 0 
  ? lastCumulativeProfit * 1.2 
  : GOAL;

  const data = {
    labels: chartDatas.map((_, i) => `${i + 1}개월차`),
    datasets: [
      {
        label: "누적 수익",
        data: chartDatas,
        backgroundColor: "rgba(255, 94, 98, 0.8)",
        borderRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        // 위에서 계산한 변수를 여기에 적용
        max: yAxisMax, 
        grid: { color: "#333" },
        ticks: {
          color: "#ccc",
          callback: (val: any) => {
            if (val >= 100000000) return (val / 100000000).toFixed(1) + "억";
            if (val >= 10000) return (val / 10000).toLocaleString() + "만";
            return val.toLocaleString();
          },
        },
      },
      x: {
        grid: { display: false },
        ticks: { color: "#ccc" },
      },
    },
    plugins: {
      legend: { display: false },
      annotation: {
        annotations: {
          goalLine: {
            type: "line" as const,
            yMin: GOAL,
            yMax: GOAL,
            borderColor: "rgba(255, 255, 255, 0.3)",
            borderWidth: 1,
            borderDash: [5, 5],
            label: {
              display: true,
              content: `목표 ${parseFloat(GOAL_txt.toFixed(1))}억`,
              backgroundColor: "rgba(0,0,0,0.5)", // 글씨 잘 보이게 배경 살짝 추가
              color: "#fff",
              yAdjust: -10,
            },
          },
          recoveryLine: {
            type: "line" as const,
            // inputTotal이 0일 경우 대비 (0 나누기 방지)
            xMin: inputTotal > 0 ? (GOAL / inputTotal) - 1 : 0,
            xMax: inputTotal > 0 ? (GOAL / inputTotal) - 1 : 0,
            borderColor: "red",
            borderWidth: 2,
            display: (_ctx: any) => inputTotal > 0, // 수익이 날 때만 표시
          },
        },
      },
    },
  };

  return (
    <div className={styles.chart_body}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default RecoveryChart;
