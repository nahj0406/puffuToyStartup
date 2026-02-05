'use client'

import clsx from "clsx";
import styles from "./BottomForm.module.css";
import ContainerV1 from "../ContainerV1.tsx/ContainerV1";
import Link from "next/link";
import siteInfo from "shared/utils/siteInfo";

export default function BottomForm() {


   const bottomFormAnchor = (id: string) => {
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
         window.scrollY - (headerH + 20);

      window.scrollTo({ top: y, behavior: 'smooth' });
   };


  return (
    <div className={styles.bottomForm}>
      <ContainerV1 className={styles.wrapper}>
        <div className={styles.left_box}>
          <div className={styles.tel_box}>
            빠른 <br />
            상담
          </div>

          <div className={styles.tel_content}>
            <Link
              className="poppins"
              href={`tel : ${siteInfo.copyRight.tel_number}`}
            >
              {siteInfo.copyRight.tel_number}
            </Link>

            <p>문의하여 주시면 담당자가 빠르게 연락드립니다.</p>
          </div>
        </div>

        <div className={styles.right_box}>
            <div 
               onClick={()=> bottomFormAnchor('calc_sec')}
               className={clsx(styles.button, styles.calc, "paperLogy")}
            >
               순이익 <br /> 계산하기
            </div>
            <div 
               onClick={()=> bottomFormAnchor('location_check')}
               className={clsx(styles.button, styles.map, "paperLogy")}
            >
               입지조건 <br /> 확인
            </div>
            <div 
               onClick={()=> bottomFormAnchor('section5')}
               className={clsx(styles.button, styles.contact, "paperLogy")}
            >
               창업상담 <br /> 신청
            </div>
        </div>
      </ContainerV1>
    </div>
  );
}
