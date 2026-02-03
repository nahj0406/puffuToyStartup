'use client'

import clsx from 'clsx';
import styles from './Section06.module.css'
import { useState } from "react";
import DatePicker from "react-datepicker"; // 기본 설정 1
import "react-datepicker/dist/react-datepicker.css"; // 기본 설정 2
import { ko } from 'date-fns/locale/ko';
import { format } from "date-fns";

export function FormBox() {
   // 날짜선택 캘린더 라이브러리 추가
   // 네이버나 다른 이메일도 가능하도록 .env.local이랑 route.ts에도 수정.
   // 문의전송에 성공하면 문의 전송이 완료되었습니다. 빠른 시일내에 답변드리겠습니다 모달 추가.
   // 개인정보처리방침 체크
   // 필수 내용들 확실하게 다 들어갔는지 체크
   // datepicker 커스텀하기
   // 라디오 값 들어가게 체크하기
   const today = new Date();
   const [startDate, setStartDate] = useState<Date | null>(null);
   

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("idle");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const formattedDate = startDate 
    ? format(startDate, "yyyy-MM-dd HH:mm") 
    : "날짜 미선택";

    const payload = {
      name: String(formData.get("name") || ""),
      tel: String(formData.get("tel") || ""),
      email: String(formData.get("email") || ""),
      address: String(formData.get("address") || ""),
      appointmentDate: formattedDate,
      
      message: String(formData.get("message") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();

      // 성공 시 달력도 초기화
        setStartDate(null);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <form onSubmit={onSubmit} className={styles.formBox}>
         <article className={styles.step_box}>
            <span className={clsx(styles.title, 'poppins')}>
               step 01 <small>(필수 입력)</small>
            </span>
            <div className={styles.itemBox}>
               <div className={styles.input_group}>
                  <div className={styles.input_item}>
                     <label className={clsx(styles.tag, styles.required)}><span>이름</span></label>
                     <input type='text' name="name" placeholder="이름을 입력해 주세요" required />
                  </div>
   
                  <div className={styles.input_item}>
                     <label className={clsx(styles.tag, styles.required)}><span>연락처</span></label>
                     <input type='text' name="tel" placeholder="연락처를 입력해 주세요" required />
                  </div>
               </div>
   
               <div className={styles.input_group}>
                  <div className={styles.input_item}>
                     <label className={clsx(styles.tag, styles.required)}><span>이메일</span></label>
                     <input type='email' name="email" placeholder="이메일을 입력해 주세요" required />
                  </div>
   
                  <div className={styles.input_item}>
                     <label className={clsx(styles.tag, styles.required)}><span>희망지역</span></label>
                     <input type='text' name="address" placeholder="희망지역을 입력해 주세요" required />
                  </div>
               </div>
   
               <div className={styles.input_group}>
                  <div className={styles.input_item}>
                     <label className={clsx(styles.tag, styles.required)}><span>상담희망날짜</span></label>
                     {/* <input name="date" placeholder="상담희망 날짜를 정해 주세요" required /> */}
                     <DatePicker
                         locale={ko} // 한국어 설정
                         dateFormat="yyyy.MM.dd HH시" // 날짜 형식 지정
                         showTimeSelect
                         minDate={new Date()}
                         selected={startDate} // 선택된 날짜와 시간을 currentTime 변수에서 가져옴
                         filterDate={(date) => date.getDay() !== 0 && date.getDay() !== 6}
                         onChange={(date: Date | null) => { // Datepicker에서 선택된 값을 업데이트
                           setStartDate(date)
                         }}
                         placeholderText="상담희망 날짜를 정해 주세요"
                     />
                  </div>
               </div>
            </div>
         </article>

         <article className={styles.step_box}>
            <span className={clsx(styles.title, 'poppins')}>
               step 02 <small>(선택 사항)</small>
            </span>
            <div className={styles.itemBox}>
               <div className={styles.input_group}>
                  <div className={styles.input_item}>
                     <label className={clsx(styles.tag)}><span>업종 변경여부</span></label>
                     <div className={styles.check_group}>
                        <label htmlFor="business_yes">
                           <input type="radio" id={'business_yes'} name={'business'} />
                           <div className={styles.check_icon}></div>
                           <span>있음</span>
                        </label>

                        <label htmlFor="business_no">
                           <input type="radio" id={'business_no'} name={'business'} />
                           <div className={styles.check_icon}></div>
                           <span>없음</span>
                        </label>
                     </div>
                  </div>
   
                  <div className={styles.input_item}>
                     <label className={clsx(styles.tag)}><span>예산</span></label>
                     <input type='text' name="name" placeholder="예산을 입력해 주세요" required />
                  </div>
               </div>
   
               <div className={styles.input_group}>
                  <div className={styles.input_item}>
                     <label className={clsx(styles.tag)}><span>점포상태</span></label>
                     <div className={styles.check_group}>
                        <label htmlFor="store_yes">
                           <input type="radio" id={'store_yes'} name={'store'} />
                           <div className={styles.check_icon}></div>
                           <span>있음</span>
                        </label>

                        <label htmlFor="store_no">
                           <input type="radio" id={'store_no'} name={'store'} />
                           <div className={styles.check_icon}></div>
                           <span>없음</span>
                        </label>

                        <label htmlFor="store_looking">
                           <input type="radio" id={'store_looking'} name={'store'} />
                           <div className={styles.check_icon}></div>
                           <span>알아보는 중</span>
                        </label>
                     </div>
                  </div>
   
                  <div className={styles.input_item}>
                     <label className={clsx(styles.tag)}><span>오픈 희망시기</span></label>
                     <input type='text' name="name" placeholder="오픈 희망시기를 입력해 주세요" required />
                  </div>
               </div>
            </div>
         </article>

         <article className={styles.step_box}>
            <span className={clsx(styles.title, 'poppins')}>
               개인정보처리방침
            </span>

            <div className={clsx(styles.itemBox, styles.agree_box)}>
               <AgreeContent />
               <label htmlFor="privacy_check" className={styles.check}>
                  <input type="checkbox" id={'privacy_check'}/>
                  <p>개인정보처리방침 동의</p>
               </label>
            </div>
         </article>

        {/* <textarea
          name="message"
          placeholder="문의 내용"
          required
          rows={6}
        /> */}
        <button type="submit">창업 문의하기</button>
      </form>

      {status === "success" && <p>전송되었습니다.</p>}
      {status === "error" && <p>전송에 실패했습니다.</p>}
    </>
  );
}

export function AgreeContent () {
   return (
      <div className={styles.agree_content}>
         <div className={styles.txt_box}>
            <p>
               개인정보 수집 범위: 이름, 연락처, 이메일 주소
               <br />
               <br />
               개인정보 수집 및 이용목적: 브랜드 가맹점주 모집, 온라인 문의 및 상담 자료와 결과 회신
               <br />
               <br />
               개인정보의 보유 및 이용기간: 수집일로부터 3년간 보유 및 이용
               <br />
               <br />
               개인정보의 제3자 제공: 개인정보는 본사의 유관 부서와 매장 관리자(슈퍼바이저, 매장점주)에게 제공될 수 있습니다.
               <br />
               <br />
               정보주체의 권리 및 행사 방법: 정보주체는 언제든지 자신의 개인정보에 대해 열람, 정정, 삭제, 처리정지 요구 등을 할 수 있습니다. 이러한 요구는 [담당 부서]를 통해 가능합니다.
               <br />
               <br />
               개인정보 보호책임자: <br />
               허준: puffuofficial@gmail.com
               {/* 개인정보 보호책임자 물어보기 */}
               <br />
               <br />
               매장과 관련된 CS의 경우, 해결과정 안내 혹은 결과 회신을 위해 매장 관리자(슈퍼바이저, 매장점주), 본사 유관부서가 연락을 드릴 수 있습니다.
               <br />
               <br />
               [정보통신망 이용촉진 및 정보 보호 등에 관한 법률] 제 74조 1항 3호에 따라 '공포심'이나 '불안감'을 유발하는 심한 욕설, 비하, 협박성 내용이 담긴 내용을 반복적으로 기재할 시, 처벌될 수 있는 점, 안내드립니다.
            </p>
         </div>
      </div>
   )
}