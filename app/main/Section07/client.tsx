"use client";

import clsx from "clsx";
// import styles from './Section07.module.css'
import styles2 from "./client.module.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NiceModal from "@ebay/nice-modal-react";
import ConfirmModal from "@/component/modal/ConfirmModal/ConfirmModal";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import annotationPlugin from 'chartjs-plugin-annotation';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  annotationPlugin
);

// 추가할것 : 출력값에 숫자 올라가는 애니메이션
// 차트 생성되면 올라가는 애니메이션
// 입력, 출력값들 , 표시되게 추가
// 그래프는 14개월까지만 표시
// {
// 방어 로직은 월순이익이 0이거나 0 미만인 경우, 매출보다 비용이 큰 경우
// 이런 값이 들어오면 현재 입력 조건에서는 투자금 회수가 불가능합니다. (월 순이익 0원 이하)
// 회수기간 영역 비활성화 + 그래프 미표시 + 설명문구로 처리
// }

export function Caculator() {

  // 기준 투자금
  const TARGET_AMOUNT = 120000000;

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

  const toNumber = (value: string) => Number(value.replace(/,/g, "")) || 0;

  const numbers = {
    expectedSales: toNumber(value.expectedSales),
    rent: toNumber(value.rent),
    maintenance: toNumber(value.maintenance),
    extraCost: toNumber(value.extraCost),
  };

  const caculator = () => {

    if(
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

    const inputTotal =
      numbers.expectedSales -
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

    if (maxDate > 15) {
      // 1. maxDate가 15보다 크면 "15개월 이상"으로 고정
      dateText = "15개월 이상";
    } else if (minDate === maxDate) {
      // 2. 값이 정수로 떨어지면 하나만 표시
      dateText = `${maxDate}개월`;
    } else {
      // 3. 그 외에는 범위로 표시
      dateText = `${minDate}개월 ~ ${maxDate}개월`;
    }
    setTotalDate(dateText);

    const chartData: number[] = [];

    const chartMaxDate = maxDate > 14 ? 14 : maxDate;

    for (let i = 1; i <= chartMaxDate; i++) {
      chartData.push(inputTotal * i);
    }

    setChartDatas(chartData); // 그래프
    
    setChartActive(true);
  };

  // 계산 버튼 클릭 시 이동
  const resultAnchor = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    // :root에 설정된 --header-h 값 가져옴.
    const headerH = parseFloat(
        getComputedStyle(document.documentElement)
          .getPropertyValue('--header-h')
    ) || 0;
    // 사파리에서도 적용 잘 되는데 만약 버벅이면 getComputedStyle 문제임.

    const y =
        el.getBoundingClientRect().top +
        window.scrollY - (headerH + 30);

    window.scrollTo({ top: y, behavior: 'smooth' });
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
    <section className={styles2.calc_wrapper} id={'calc_sec'}>
      <div className={styles2.calc_header}>
        <motion.div 
          className={styles2.calc_title}
          initial='offscreen'
          whileInView='onscreen'
          viewport={{amount: 0.5, once: true}}
          variants={{
              offscreen: { y: -20, opacity: 0,},
              onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.3,},},
          }}
        >
          <h2 className="paperLogy">
            <span className="title_deco">수익 회수기간</span> <br />
            직접 계산해 보세요
          </h2>

          <p className="paperLogy">
            초기 투자 비용과 예상 매출을 입력하면 <br />내 상황에 맞는
            회수기간을 확인하실 수 있습니다.
          </p>
        </motion.div>

        <motion.article 
          className={styles2.calc_input_box}
          initial='offscreen'
          whileInView='onscreen'
          viewport={{amount: 0.5, once: true}}
          variants={{
              offscreen: { y: -20, opacity: 0,},
              onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.3,},},
          }}
        >
          <div className={styles2.calc_input_header}>
            {/* <input type="text" placeholder="투자금(1.2억)" readOnly /> */}
            <p>기본 투자금 : 1.2억</p>
          </div>

          <div className={styles2.input_group}>
            <div className={styles2.input_item}>
              <label className={clsx(styles2.tag, styles2.required)}>
                <span>예상 매출</span>
              </label>
              <CalcInput
                placeholder="예상 매출을 입력해 주세요."
                value={value.expectedSales}
                setValue={(v) => setValue({ ...value, expectedSales: v })}
              />
            </div>

            <div className={styles2.input_item}>
              <label className={clsx(styles2.tag, styles2.required)}>
                <span>월세</span>
              </label>
              <CalcInput
                placeholder="예상 월세를 입력해 주세요."
                value={value.rent}
                setValue={(v) => setValue({ ...value, rent: v })}
              />
            </div>

            <div className={styles2.input_item}>
              <label className={clsx(styles2.tag, styles2.required)}>
                <span>관리비</span>
              </label>
              <CalcInput
                placeholder="관리비를 입력해 주세요."
                value={value.maintenance}
                setValue={(v) => setValue({ ...value, maintenance: v })}
              />
            </div>

            <div className={styles2.input_item}>
              <label className={clsx(styles2.tag)}>
                <span>
                  기타 <small>(선택사항)</small>
                </span>
              </label>
              <CalcInput
                placeholder="기타 비용을 입력해 주세요."
                value={value.extraCost}
                setValue={(v) => setValue({ ...value, extraCost: v })}
              />
            </div>
          </div>

          <button
            className={clsx(styles2.calc_submit, "paperLogy")}
            onClick={() => {
              caculator();
              if(total > 0) {
                resultAnchor('calc_result');
              }
            }}
          >
            계산하기
          </button>
        </motion.article>
      </div>

      <div id="calc_result" className={styles2.anchor_dummy}></div>
      {
        chartActive && (
        <AnimatePresence>
          <motion.div 
            className={styles2.calc_result_box}
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
            <article className={styles2.result_window}>
                {(total > 0 && chartActive)  && (
                  <AnimatePresence>
                      <motion.div
                        className={styles2.data_box}
                        key={total}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {/* <div className="result1">월 순이익 추정치: {total || 0}</div> */}
                        <p className={styles2.month_result}>
                            투자회수기간 : {totalDate}
                        </p>

                        <RecoveryChart chartDatas={chartDatas} inputTotal={total} amount={TARGET_AMOUNT} />
                      </motion.div>
                  </AnimatePresence>
                )}

                {((total < 0 || total === 0) && chartActive ) && (
                  <AnimatePresence>
                      <motion.div
                        className={styles2.not_data_txt}
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

                {(total === 0 && !chartActive) && (
                  <AnimatePresence>
                      <motion.div
                        className={styles2.not_data_txt}
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
                
              {(total > 0 && chartActive) && (
                <AnimatePresence>
                  <motion.div 
                    className={styles2.profit}
                    key={total}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="paperLogy">월 순이익 추정치 : {formatCurrency(total)}</span>
                  </motion.div>
                </AnimatePresence>
              )

              }
          </motion.div>
        </AnimatePresence>
        )
      }
    </section>
  );
}

function CalcInput({
  placeholder,
  value,
  setValue,
}: {
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
}) {
  return (
    <input
      value={value}
      type="text"
      maxLength={25}
      placeholder={placeholder}
      onChange={(e) => {
         // 숫자와 하이픈(-)이 아닌 문자가 들어오면 즉시 빈 문자열로 대체
         e.currentTarget.value = e.currentTarget.value
         .replace(/[^0-9]/g, "")
         .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

         setValue(e.target.value);
      }}
    />
  );
}


// 차트
interface Props {
  chartDatas: number[];
  inputTotal: number; // 월 순이익
  amount: number;
}

const RecoveryChart = ({ chartDatas, inputTotal, amount }: Props) => {
  const GOAL = amount; // 1.2억

  const data = {
    labels: chartDatas.map((_, i) => `${i + 1}개월차`),
    datasets: [
      {
        label: '누적 수익',
        data: chartDatas,
        // 배경 그라데이션 (함수로 구현하거나 단순 색상 지정)
        backgroundColor: 'rgba(255, 94, 98, 0.8)',
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
        grid: { color: '#333' },
        ticks: {
          color: '#ccc',
          // 단위 포맷팅 (예: 1.2억, 9000...)
          callback: (val: any) => {
            if (val >= 100000000) return (val / 100000000).toFixed(1) + '억';
            return val.toLocaleString();
          },
        },
      },
      x: {
        grid: { display: false },
        ticks: { color: '#ccc' },
      },
    },
    plugins: {
      legend: { display: false },
      annotation: {
        annotations: {
          // 1.2억 목표 가로선
          goalLine: {
            type: 'line' as const,
            yMin: GOAL,
            yMax: GOAL,
            borderColor: 'rgba(255, 255, 255, 0.3)',
            borderWidth: 1,
            borderDash: [5, 5],
            label: {
              display: true,
              content: '목표 1.2억',
              backgroundColor: 'transparent',
              color: '#fff',
              yAdjust: -10,
            },
          },
          // 투자 회수 시점 세로선 (예시: 10개월차 회수라면)
          recoveryLine: {
            type: 'line' as const,
            xMin: (GOAL / inputTotal) - 1, // index 기준
            xMax: (GOAL / inputTotal) - 1,
            borderColor: 'red',
            borderWidth: 2,
          },
        },
      },
    },
  };

  return (
    <div className={styles2.chart_body}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default RecoveryChart;
