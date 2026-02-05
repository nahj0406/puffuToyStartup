import clsx from 'clsx'
import styles from './Section01.module.css'
import * as motion from "motion/react-client"
import type { Variants } from "motion/react"
import isMobile from 'shared/utils/isMobile'

export default function Section01() {

   const cardVariants : Variants = {
      offscreen: { y: 50, opacity: 0 },
      onscreen: { 
         y: 0, 
         opacity: 1, 
         transition: {
            y: { 
               type: "spring", 
               bounce: 0.4, 
               duration: 1, 
               delay: 1.3 
            },
            opacity: { 
               type: "tween", 
               ease: "easeInOut", 
               duration: 0.3, 
               delay: 1.3 
            }
         }
      },
   }
   
   const bubbleVariants : Variants = {
      offscreen: { y: 50, opacity: 0 },
      onscreen: { 
         y: 0,
         opacity: 1, 
         transition: {
            y: { 
               type: "spring", 
               bounce: 0.4, 
               duration: 1, 
               delay: 1.6 
            },
            opacity: { 
               type: "tween", 
               ease: "easeInOut", 
               duration: 0.3, 
               delay: 1.6 
            }
         }
      },
   }

   const mobTitleAnimation : Variants = {
      offscreen: { y: 100, opacity: 0},
      onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.3,},},
   }

   return (
      <motion.section 
         className={styles.sec1}
         initial='offscreen'
         whileInView='onscreen'
         viewport={{amount: 0.5, once: true}}
      >
         {
            [1,2,3,4,5,6].map((i)=> {
               return (
                  <motion.img 
                     key={i} src="/img/sec1/coin.png" alt="코인" className={clsx(styles.coin, styles[`coin_${i}`])}
                     variants={{
                        offscreen: { scale: 0.7, opacity: 0,},
                        onscreen: { scale: 1, opacity: 1, transition: {type: "spring", bounce: 0.4,  duration: 1.2, delay: 0.2, ease: 'easeInOut',},},
                     }}
                  />
               )
            })
         }

         <article className={styles.circle_itemBox}>
            <motion.figure
               className={styles.circle_wrap}
               variants={isMobile ? mobTitleAnimation : {}}
            >
               <motion.img 
                  src="/img/sec1/banner_circle.png" alt="메인 서클 이미지" className={styles.circle_img} 
               />

               <div className={styles.content_box}>
                  <div className={styles.content}>
                     <div className={styles.txt_box}>
                        <div>
                           <motion.h2 
                              className='paperLogy'
                              variants={{
                                 offscreen: { y: '100%',},
                                 onscreen: { y: 0, transition: { duration: 0.5, delay: 0.3,},},
                              }}
                           >
                                 남들 모르게, 매출이 남는
                           </motion.h2>
                        </div>

                        <div>
                           <motion.h1 
                              className='paperLogy'
                              variants={{
                                 offscreen: { y: '100%',},
                                 onscreen: { y: 0, transition: { duration: 0.5, delay: 0.3,},},
                              }}
                           >
                              무인 성인 웰니스 매장
                           </motion.h1>
                        </div>
                     </div>
   
                     <motion.img 
                        variants={{
                           offscreen: { y: '-100%',},
                           onscreen: { y: 0, transition: { duration: 0.8, delay: 0.3, ease: "easeInOut",},},
                        }}
                        src="/img/sec1/main_logo.png" alt="메인 로고" className={styles.logo} 
                     />
                  </div>
   
                  <motion.div 
                     className={styles.pakage_card}
                     variants={cardVariants}
                  >
                     <h4 className='paperLogy'>패키지 1.2억</h4>
                     <p>
                        외부간판 + 키오스크 4대 + <br />
                        자판기 12대 + 인테리어
                     </p>
                  </motion.div>
               </div>

            </motion.figure>
         </article>

         <div className={clsx(styles.talk_bubble, styles.bubble01)}>
            <motion.img 
               variants={bubbleVariants}
               src="/img/sec1/talk_bubble_01.png" alt="평균 매출 3000만원" className={styles.circle_img} 
            />
         </div>

         <div className={clsx(styles.talk_bubble, styles.bubble02)}>
            <motion.img 
               variants={bubbleVariants}
               src="/img/sec1/talk_bubble_02.png" alt="점주 순이익 30~40%" className={styles.circle_img} 
            />
         </div>
      </motion.section>
   )
}