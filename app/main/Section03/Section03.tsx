import clsx from 'clsx'
import styles from './Section03.module.css'
import ContainerV1 from '@/component/ContainerV1.tsx/ContainerV1'
import Link from 'next/link'
import { SlideBox } from './client'

export default function Section03() {
   return (
      <section className={styles.sec3} id='section3'>
         <div className={styles.title_header}>
            <div className="title">
               <span>무인성인용품은</span>
               <h2>상권을 타지 않습니다</h2>
            </div>
         </div>

         <ContainerV1 className={styles.wrapper}>
            <div className={styles.itemBox}>
               <div className="text_box">
                  <h3>
                     <span className='title_deco'>필요해서 찾아오는</span> 목적형 <br />
                     소비 지중이 높은 사업
                  </h3>
                  <p>
                     <b>유동인구가 많지 않아도,</b> 일정 반경 <br />
                     내 수요만 확보되면 운영이 가능합니다.
                  </p>
               </div>

               <figure className={styles.img_box}>
                  <div className={styles.unit}>
                     <img src="/img/sec2/rotate_circle.png" alt="로고 써클" className={styles.logo_circle} />

                     <div className={styles.unit_txt}>
                        <span className={clsx(styles.title_point, 'poppins')}>point 1</span>
                        <p>
                           지하~ 지상 1층 메인 상권이 아니라도 <br />
                           운영 가능(동선/간판/안내 설계로 보완)
                        </p>
                     </div>
                  </div>

                  <div className={styles.unit}>
                     <img src="/img/sec2/rotate_circle.png" alt="로고 써클" className={styles.logo_circle} />

                     <div className={styles.unit_txt}>
                        <span className={clsx(styles.title_point, 'poppins')}>point 2</span>
                        <p>
                           야간 · 심야 시간대 매출이 발생할 수 <br />
                           있어 상권의 시간대 한계 보완 가능
                        </p>
                     </div>
                  </div>
               </figure>
            </div>
         </ContainerV1>

         <ContainerV1 className={clsx(styles.location_box, styles.wrapper)}>
            <div className={styles.title_box}>
               <div className="title">
                  <span>매물찾기부터 규제 검토까지</span>
                  <h2>본사가 함께합니다</h2>
               </div>

               <p>성인용품 관련 업종은 청소년 출입 · 고용 제한, 교육환경보호구역 등 <br /> 입지에 대한 사전 검토가 반드시 필요한 업종입니다.</p>
            </div>

            <div className={styles.itemBox}>
               <figure className={styles.img_box}>
                  <img src="" alt="맵 이미지" />
                  <ul className={styles.color_check}>
                     <li className={clsx(styles.unit, styles.red)}>
                        <span className="circle"></span>
                        <p>절대 보호구역</p>
                     </li>

                     <li className={clsx(styles.unit, styles.blue)}>
                        <span className="circle"></span>
                        <p>상대 보호구역</p>
                     </li>

                     <li className={clsx(styles.unit, styles.green)}>
                        <span className="circle"></span>
                        <p>학교 부지</p>
                     </li>
                  </ul>
               </figure>

               <SlideBox />
            </div>

            <p className={styles.sub_txt}>
               처음 창업을 준비하시는 분들이 어려워하고 불안해하는 부분에서 <br />
               푸푸토이는 입지 단계부터 본사가 함께 검토하는 구조를 운영하고 있습니다.
            </p>

            <div className={styles.btn_box}>
               <div className={styles.btn}>
                  <Link href={'https://eeis.schoolkeepa.or.kr/gis/gis.do'}>
                     내 입지조건 확인하기
                  </Link>
               </div>

               <div className={styles.btn}>
                  내 입지조건 문의하기
               </div>
            </div>
         </ContainerV1>
      </section>
   )
}