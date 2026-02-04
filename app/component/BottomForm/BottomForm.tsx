import clsx from "clsx";
import { ReactNode } from "react";
import styles from './BottomForm.module.css'
import ContainerV1 from "../ContainerV1.tsx/ContainerV1";
import Link from "next/link";
import siteInfo from "shared/utils/siteInfo";



export default function BottomForm() {
   return (
      <div className={styles.bottomForm}>
         <ContainerV1 className={styles.wrapper}>
            <div className={styles.left_box}>
               <div className={styles.tel_box}>
                  빠른 <br />
                  상담
               </div>

               <div className={styles.tel_content}>
                  <Link className="poppins" href={`tel : ${siteInfo.copyRight.tel_number}`}>
                     {siteInfo.copyRight.tel_number}
                  </Link>

                  <p>문의하여 주시면 담당자가 빠르게 연락드립니다.</p>
               </div>
            </div>

            <div className={styles.right_box}>
               <div className={styles.button}>순이익 계산하기</div>
               <div className={styles.button}>입지조건 확인</div>
               <div className={styles.button}>창업상담 신청</div>
            </div>
         </ContainerV1>
      </div>
   )
}