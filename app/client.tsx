'use client'
import { useState } from "react";

// 추가할것 : 출력값에 숫자 올라가는 애니메이션
// 차트 생성되면 올라가는 애니메이션
// 입력, 출력값들 , 표시되게 추가
// 그래프는 14개월까지만 표시
// {
// 방어 로직은 월순이익이 0이거나 0 미만인 경우, 매출보다 비용이 큰 경우
// 이런 값이 들어오면 현재 입력 조건에서는 투자금 회수가 불가능합니다. (월 순이익 0원 이하)
// 회수기간 영역 비활성화 + 그래프 미표시 + 설명문구로 처리
// }

export function Caculator () {
   const [value, setValue] = useState({
    expectedSales: '',
    rent: '',
    maintenance: '',
    extraCost: '',
  });

  const [total, setTotal] = useState<number>(0);
  const [totalDate, setTotalDate] = useState<string>('');
  const [chartDatas, setChartDatas] = useState<number[]>([]);

  const toNumber = (value: string) => Number(value) || 0;

   const numbers = {
   expectedSales: toNumber(value.expectedSales),
   rent: toNumber(value.rent),
   maintenance: toNumber(value.maintenance),
   extraCost: toNumber(value.extraCost),
   };

   const caculator = () => {
      const inputTotal = numbers.expectedSales - (numbers.rent + numbers.maintenance + numbers.extraCost);
      
      // 총 순이익
      console.log('월 순이익:',inputTotal);

      setTotal(inputTotal);

      const date = 120000000 / inputTotal;

      const minDate = Math.floor(date);
      const maxDate = Math.ceil(date);

      console.log(`투자회수기간:${date}`,minDate, '~', maxDate);

      // 총 투자회수기간
      setTotalDate(`${minDate}개월 ~ ${maxDate}개월`);

      const chartData: number[] = [];

      const chartMaxDate = maxDate > 14 ? 14 : maxDate;

      for(let i = 1; i <= chartMaxDate; i++) {
         chartData.push(inputTotal * i);
      }

      setChartDatas(chartData); // 그래프
   }

   return (
      <>
         <div className="input_box">
            <div>
               <input type="text" placeholder="투자금(1.2억)" readOnly />
            </div>
               <div>
                  <Input placeholder="예상매출" value={value.expectedSales} setValue={(v) => setValue({ ...value, expectedSales: v })} />
                  <Input placeholder="월세" value={value.rent} setValue={(v) => setValue({ ...value, rent: v })} />
                  <Input placeholder="관리비" value={value.maintenance} setValue={(v) => setValue({ ...value, maintenance: v })} />
                  <Input placeholder="기타비용(선택사항)" value={value.extraCost} setValue={(v) => setValue({ ...value, extraCost: v })} />
               </div>
         </div>

         <div className="result_box">
            {
               total > 0 && (
                  <>
                     <div className="result1">
                        월 순이익 추정치: {total || 0}
                     </div>
                     <div className="date_result">
                        <p>투자회수기간(개월) :{totalDate}</p>

                        <div className="chart">
                           {
                              chartDatas.map((item, i)=> {
                                 return (
                                    <div key={i}>{i+1}개월차: {item}원</div>
                                 )
                              })
                           }
                        </div>
                     </div>
                  </>
               )
            }

            {
               (total < 0 || total === 0) && (
                  <div>현재 입력 조건에서는 투자금 회수가 불가능합니다.</div>
               )
            }
         </div>

         <button onClick={()=> caculator()} >계산하기</button>
      </>
   )
}

function Input({
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
      placeholder={placeholder}
      onChange={(e) => setValue(e.target.value)}
    />
  )
}
