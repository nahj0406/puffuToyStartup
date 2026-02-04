"use client";

import clsx from "clsx";
// import styles from './Section07.module.css'
import styles2 from "./client.module.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [value, setValue] = useState({
    expectedSales: "",
    rent: "",
    maintenance: "",
    extraCost: "",
  });

  const [total, setTotal] = useState<number>(0);
  const [totalDate, setTotalDate] = useState<string>("");
  const [chartDatas, setChartDatas] = useState<number[]>([]);

  const toNumber = (value: string) => Number(value.replace(/,/g, "")) || 0;

  const numbers = {
    expectedSales: toNumber(value.expectedSales),
    rent: toNumber(value.rent),
    maintenance: toNumber(value.maintenance),
    extraCost: toNumber(value.extraCost),
  };

  const caculator = () => {
    const inputTotal =
      numbers.expectedSales -
      (numbers.rent + numbers.maintenance + numbers.extraCost);

    // 총 순이익
    console.log("월 순이익:", inputTotal);

    setTotal(inputTotal);

    const date = 120000000 / inputTotal;

    const minDate = Math.floor(date);
    const maxDate = Math.ceil(date);

    console.log(`투자회수기간:${date}`, minDate, "~", maxDate);

    // 총 투자회수기간
    setTotalDate(`${minDate}개월 ~ ${maxDate}개월`);

    const chartData: number[] = [];

    const chartMaxDate = maxDate > 14 ? 14 : maxDate;

    for (let i = 1; i <= chartMaxDate; i++) {
      chartData.push(inputTotal * i);
    }

    setChartDatas(chartData); // 그래프
  };

  return (
    <section className={styles2.calc_wrapper}>
      <div className={styles2.calc_header}>
        <div className={styles2.calc_title}>
          <h2 className="paperLogy">
            <span className="title_deco">수익 회수기간</span> <br />
            직접 계산해 보세요
          </h2>

          <p className="paperLogy">
            초기 투자 비용과 예상 매출을 입력하면 <br />내 상황에 맞는
            회수기간을 확인하실 수 있습니다.
          </p>
        </div>

        <article className={styles2.calc_input_box}>
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
            onClick={() => caculator()}
          >
            계산하기
          </button>
        </article>
      </div>

      <div className={styles2.calc_result_box}>
         <article className={styles2.result_window}>
            {total > 0 && (
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

                     {/* 3000씩 더해서 1.2천에서 멈추면 됨. */}
                     <div className={styles2.month_chart}>
                        <ul className={styles2.Coordinates_Y}>
                           <li>1.2억</li>
                           <li>9,000</li>
                           <li>6,000</li>
                           <li>3,000</li>
                           <li>0</li>
                        </ul>

                        <div className={styles2.Coordinates_X}>
                           {chartDatas.map((item, i) => {
                              return (
                              <div key={i} className={styles2.item}>
                                 <div 
                                    className={styles2.object}
                                    style={{ 
                                      '--timing-delay': 0.5,
                                    } as React.CSSProperties}
                                 >
                                    {/* {item.toLocaleString() || 0}원 */}
                                 </div>

                                 <span>{i + 1}개월차</span>
                              </div>
                              );
                           })}
                           {/* <div className={styles2.graph_item}>
                              
                           </div> */}
                        </div>
                     </div>
                  </motion.div>
               </AnimatePresence>
            )}

            {(total < 0 || total === 0) && (
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
         </article>

         <div className={styles2.profit}>
            <span className="paperLogy">월 순이익 추정치 : {total.toLocaleString() || 0}만원</span>
         </div>
      </div>
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
