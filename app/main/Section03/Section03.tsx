import clsx from 'clsx'
import styles from './Section03.module.css'
import ContainerV1 from '@/component/ContainerV1.tsx/ContainerV1'

export default function Section03() {
   return (
      <section className={styles.sec3}>
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
      </section>
   )
}