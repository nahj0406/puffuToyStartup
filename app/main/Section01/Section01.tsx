import clsx from 'clsx'
import styles from './Section01.module.css'

export default function Section01() {
   return (
      <section className={styles.sec1} id='section1'>
         {
            [1,2,3,4,5,6].map((i)=> {
               return (
                  <img key={i} src="/img/sec1/coin.png" alt="코인" className={clsx(styles.coin, styles[`coin_${i}`])} />
               )
            })
         }

         <article className={styles.circle_itemBox}>
            <figure className={styles.circle_wrap}>
               <img src="/img/sec1/banner_circle.png" alt="메인 서클 이미지" className={styles.circle_img} />

               <div className={styles.content_box}>
                  <div className={styles.content}>
                     <div className={styles.txt_box}>
                        <h2 className='paperLogy'>남들 모르게, 매출이 남는</h2>
                        <h1 className='paperLogy'>무인 성인 웰니스 매장</h1>
                     </div>
   
                     <img src="/img/sec1/main_logo.png" alt="메인 로고" className={styles.logo} />
                  </div>
   
                  <div className={styles.pakage_card}>
                     <h4 className='paperLogy'>패키지 1.2억</h4>
                     <p>
                        외부간판 + 키오스크 4대 + <br />
                        자판기 12대 + 인테리어
                     </p>
                  </div>
               </div>

            </figure>
         </article>

         <div className={clsx(styles.talk_bubble, styles.bubble01)}>
            <img src="/img/sec1/talk_bubble_01.png" alt="평균 매출 3000만원" className={styles.circle_img} />
         </div>

         <div className={clsx(styles.talk_bubble, styles.bubble02)}>
            <img src="/img/sec1/talk_bubble_02.png" alt="점주 순이익 30~40%" className={styles.circle_img} />
         </div>
      </section>
   )
}