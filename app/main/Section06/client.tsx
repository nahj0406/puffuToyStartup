"use client";

import clsx from "clsx";
import styles from "./Section06.module.css";
import { useEffect, useRef, useState } from "react";
import NiceModal from "@ebay/nice-modal-react";
import ConfirmModal from "@/component/modal/ConfirmModal/ConfirmModal";

// date-picker
import DatePicker from "react-datepicker"; // 기본 설정 1
import "react-datepicker/dist/react-datepicker.css"; // 기본 설정 2
import { ko } from "date-fns/locale/ko";
import { format } from "date-fns";
// 시간 min,max용
// import { setHours, setMinutes } from "date-fns";

export function FormBox() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [openDate, setOpenDate] = useState<Date | null>(null);
  const [isMobilePicker, setIsMobilePicker] = useState(false);
  const startPickerRef = useRef<any>(null);
  const openPickerRef = useRef<any>(null);

  useEffect(() => {
    // 모바일에선 모달로 처리, 창 줄어서 모바일 영역 들어가면 열려 있던 창 닫힘.
    const mql = window.matchMedia("(max-width: 768px)");
    setIsMobilePicker(mql.matches);

    const handler = (e: MediaQueryListEvent) => {
      setIsMobilePicker(e.matches);

      if ((e.matches && startPickerRef.current) || openPickerRef.current) {
        startPickerRef.current.setOpen(false);
        openPickerRef.current.setOpen(false);
      }
    };

    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  // nodemailer 전송
  const [privacyCheck, setPrivacyCheck] = useState<Boolean>(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isLoading) return;

    setStatus("idle");

    if (!privacyCheck) {
      await NiceModal.show(ConfirmModal, {
        message: "개인정보 수집 및 이용에 동의해주세요.",
        autoClose: 1500,
      });
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    const formattedDate = startDate // 상담희망 날짜
      ? format(startDate, "yyyy-MM-dd (EEEE)", { locale: ko })
      : "";

    const formOPenDate = openDate // 오픈 희망 시기
      ? format(openDate, "yyyy-MM", { locale: ko })
      : "";

    const requiredFields = ["name", "tel", "email", "address"];

    // 하나라도 비어있으면 true 반환
    const isDateEmpty = !startDate;
    const isInvalid = requiredFields.some(
      (field) => !String(formData.get(field) || "").trim(),
    );

    if (isInvalid || isDateEmpty) {
      await NiceModal.show(ConfirmModal, {
        message: "필수 항목을 모두 입력해 주세요.",
        autoClose: 1500,
      });

      return;
    }

    const payload = {
      name: String(formData.get("name") || ""),
      tel: String(formData.get("tel") || ""),
      email: String(formData.get("email") || ""),
      address: String(formData.get("address") || ""),
      appointmentDate: formattedDate,

      business: String(formData.get("business") || ""),
      budget: String(formData.get("budget") || ""),
      store: String(formData.get("store") || ""),
      openDate: formOPenDate,

      message: String(formData.get("message") || ""),
    };

    setIsLoading(true);

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
        setIsLoading(false);

        await NiceModal.show(ConfirmModal, {
          message:
            "문의 전송이 완료되었습니다. \n 빠른 시일내에 답변드리겠습니다",
          autoClose: 3000,
        });
      } else {
        setStatus("error");
        NiceModal.show(ConfirmModal, {
          message:
            "네트워크 오류가 발생했습니다. \n 조금 뒤에 다시 실행해 주세요",
        });
      }
    } catch (err) {
      setStatus("error");
      NiceModal.show(ConfirmModal, {
        message:
          "알 수 없는 오류가 발생했습니다. \n 조금 뒤에 다시 실행해 주세요",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <form onSubmit={onSubmit} className={styles.formBox}>
        <article className={styles.step_box}>
          <span className={clsx(styles.title, "poppins")}>
            step 01 <small>(필수 입력)</small>
          </span>
          <div className={styles.itemBox}>
            <div className={styles.input_group}>
              <div className={styles.input_item}>
                <label className={clsx(styles.tag, styles.required)}>
                  <span>성함</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="성함을 입력해 주세요"
                  required
                  maxLength={30}
                />
              </div>

              <div className={styles.input_item}>
                <label className={clsx(styles.tag, styles.required)}>
                  <span>연락처</span>
                </label>
                <input
                  type="text"
                  name="tel"
                  placeholder="연락처를 입력해 주세요"
                  required
                  onChange={(e) => {
                    // 숫자와 하이픈(-)이 아닌 문자가 들어오면 즉시 빈 문자열로 대체
                    e.currentTarget.value = e.currentTarget.value.replace(
                      /[^0-9-]/g,
                      "",
                    );
                  }}
                  maxLength={20}
                />
              </div>
            </div>

            <div className={styles.input_group}>
              <div className={styles.input_item}>
                <label className={clsx(styles.tag, styles.required)}>
                  <span>이메일</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="이메일을 입력해 주세요"
                  required
                  maxLength={25}
                />
              </div>

              <div className={styles.input_item}>
                <label className={clsx(styles.tag, styles.required)}>
                  <span>희망지역</span>
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="희망지역을 입력해 주세요"
                  required
                  maxLength={30}
                />
              </div>
            </div>

            <div className={styles.input_group}>
              <div className={styles.input_item}>
                <label className={clsx(styles.tag, styles.required)}>
                  <span>상담희망날짜</span>
                </label>
                <DatePicker
                  ref={startPickerRef}
                  locale={ko} // 한국어 설정
                  dateFormat="yyyy.MM.dd (EEEE)" // 날짜 형식 지정 시간 필요하면 추가 :HH시 mm분
                  minDate={new Date()}
                  selected={startDate}
                  filterDate={(date) =>
                    date.getDay() !== 0 && date.getDay() !== 6
                  }
                  onChange={(date: Date | null) => {
                    // Datepicker에서 선택된 값을 업데이트
                    setStartDate(date);
                  }}
                  withPortal={isMobilePicker}
                  className={styles.custom_picker_input}
                  calendarClassName={"calenderWrapper"}
                  placeholderText="상담희망 날짜를 정해 주세요"
                  //  showTimeSelect
                  //  minTime={setHours(setMinutes(new Date(), 30), 9)}
                  //  maxTime={setHours(setMinutes(new Date(), 30), 18)}
                />
              </div>
            </div>
          </div>
        </article>

        <article className={styles.step_box}>
          <span className={clsx(styles.title, "poppins")}>
            step 02 <small>(선택 사항)</small>
          </span>
          <div className={styles.itemBox}>
            <div className={styles.input_group}>
              <div className={styles.input_item}>
                <label className={clsx(styles.tag)}>
                  <span>업종 변경여부</span>
                </label>
                <div className={styles.check_group}>
                  <label htmlFor="business_yes">
                    <input
                      type="radio"
                      id={"business_yes"}
                      value="있음"
                      name={"business"}
                    />
                    <div className={styles.check_icon}></div>
                    <span>있음</span>
                  </label>

                  <label htmlFor="business_no">
                    <input
                      type="radio"
                      id={"business_no"}
                      value="없음"
                      name={"business"}
                    />
                    <div className={styles.check_icon}></div>
                    <span>없음</span>
                  </label>
                </div>
              </div>

              <div className={styles.input_item}>
                <label className={clsx(styles.tag)}>
                  <span>예산</span>
                </label>
                <input
                  type="text"
                  name="budget"
                  placeholder="예산을 입력해 주세요"
                  maxLength={25}
                />
              </div>
            </div>

            <div className={styles.input_group}>
              <div className={styles.input_item}>
                <label className={clsx(styles.tag)}>
                  <span>점포상태</span>
                </label>
                <div className={styles.check_group}>
                  <label htmlFor="store_yes">
                    <input
                      type="radio"
                      id={"store_yes"}
                      value="있음"
                      name={"store"}
                    />
                    <div className={styles.check_icon}></div>
                    <span>있음</span>
                  </label>

                  <label htmlFor="store_no">
                    <input
                      type="radio"
                      id={"store_no"}
                      value="없음"
                      name={"store"}
                    />
                    <div className={styles.check_icon}></div>
                    <span>없음</span>
                  </label>

                  <label htmlFor="store_looking">
                    <input
                      type="radio"
                      id={"store_looking"}
                      value="알아보는 중"
                      name={"store"}
                    />
                    <div className={styles.check_icon}></div>
                    <span>알아보는 중</span>
                  </label>
                </div>
              </div>

              <div className={styles.input_item}>
                <label className={clsx(styles.tag)}>
                  <span>오픈 희망시기</span>
                </label>
                <DatePicker
                  ref={openPickerRef}
                  locale={ko} // 한국어 설정
                  dateFormat="yyyy.MM"
                  minDate={new Date()}
                  selected={openDate}
                  showMonthYearPicker
                  onChange={(date: Date | null) => {
                    setOpenDate(date);
                  }}
                  withPortal={isMobilePicker}
                  className={styles.custom_picker_input}
                  calendarClassName={"monthWrapper"}
                  placeholderText="오픈희망시기를 정해 주세요"
                />
              </div>
            </div>
          </div>
        </article>

        <article className={styles.step_box}>
          <span className={clsx(styles.title, "poppins")}>
            개인정보처리방침
          </span>

          <div className={clsx(styles.itemBox, styles.agree_box)}>
            <AgreeContent />
            <label htmlFor="privacy_check" className={styles.check}>
              <input
                type="checkbox"
                id={"privacy_check"}
                checked={privacyCheck as boolean}
                onChange={(e) => setPrivacyCheck(e.target.checked)}
              />
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
        <button disabled={isLoading} type="submit">
          {isLoading ? "문의 전송중" : "창업 문의하기"}
        </button>
      </form>

      {/* {status === "success" && <p className="text_route">전송되었습니다.</p>}
      {status === "error" && <p className="text_route">전송에 실패했습니다.</p>} */}
    </>
  );
}

export function AgreeContent() {
  return (
    <div className={styles.agree_content}>
      <div className={styles.txt_box}>
        <p className={styles.title}>개인정보 처리방침 안내</p>
        <p>
          개인정보 수집 범위: 이름, 연락처, 이메일 주소
          <br />
          <br />
          개인정보 수집 및 이용목적: 브랜드 가맹점주 모집, 온라인 문의 및 상담
          자료와 결과 회신
          <br />
          <br />
          개인정보의 보유 및 이용기간: 수집일로부터 3년간 보유 및 이용
          <br />
          <br />
          개인정보의 제3자 제공: 개인정보는 본사의 유관 부서와 매장
          관리자(슈퍼바이저, 매장점주)에게 제공될 수 있습니다.
          <br />
          <br />
          정보주체의 권리 및 행사 방법: 정보주체는 언제든지 자신의 개인정보에
          대해 열람, 정정, 삭제, 처리정지 요구 등을 할 수 있습니다. 이러한
          요구는 [담당 부서]를 통해 가능합니다.
          <br />
          <br />
          개인정보 보호책임자: <br />
          허준: puffuofficial@gmail.com
          {/* 개인정보 보호책임자 물어보기 */}
          <br />
          <br />
          매장과 관련된 CS의 경우, 해결과정 안내 혹은 결과 회신을 위해 매장
          관리자(슈퍼바이저, 매장점주), 본사 유관부서가 연락을 드릴 수 있습니다.
          <br />
          <br />
          [정보통신망 이용촉진 및 정보 보호 등에 관한 법률] 제 74조 1항 3호에
          따라 '공포심'이나 '불안감'을 유발하는 심한 욕설, 비하, 협박성 내용이
          담긴 내용을 반복적으로 기재할 시, 처벌될 수 있는 점, 안내드립니다.
        </p>
      </div>
    </div>
  );
}
