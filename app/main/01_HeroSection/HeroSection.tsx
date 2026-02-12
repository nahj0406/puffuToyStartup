import clsx from 'clsx'
import styles from './HeroSection.module.scss'
import * as motion from "motion/react-client"
import type { Variants } from "motion/react"
import { KeywordBox } from './client'



export default function HeroSection() {

   // 말풍선
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
               delay: 0.5 
            },
            opacity: { 
               type: "tween", 
               ease: "easeInOut", 
               duration: 0.3, 
               delay: 0.5 
            }
         }
      },
   }

   // 패키지 카드
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
               delay: 2.4 
            },
            opacity: { 
               type: "tween", 
               ease: "easeInOut", 
               duration: 0.3, 
               delay: 2.4 
            }
         }
      },
   }

   return (
      <motion.section 
         className={styles.hero}
         initial='offscreen'
         whileInView='onscreen'
         viewport={{amount: 0.5, once: true}}
      >
         <article className={styles.itemBox}>
            <motion.figure
               className={styles.circle_wrap}
               variants={{
                  offscreen: { y: -30, opacity: 0},
                  onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.1,},},
               }}
            >
               <div className={styles.content_box}>
                  <div className={styles.content}>
                     <div className={styles.txt_box}>
                        <motion.p
                           className='paperLogy'
                           variants={{
                              offscreen: { y: -30, opacity: 0},
                              onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.3,},},
                           }}
                        >
                           자동 운영으로 <b>효율</b>을, <br />
                           독자적인 매장 설계로 <b>경쟁력</b>을!
                        </motion.p>

                        <div className={styles.subTitle_wrap}>
                           <motion.h2 
                              className='paperLogy'
                              variants={{
                                 offscreen: { y: 10, opacity: 0},
                                 onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.8,},},
                              }}
                           >
                                 남들 모르게, <span>매출</span> 남는
                           </motion.h2>
                        </div>

                        <motion.div 
                           className={styles.title_wrap}
                           variants={{
                              offscreen: { width: 0, opacity: 0,},
                              onscreen: { width: '100%', opacity: 1, transition: { duration: 0.7, delay: 1,},},
                           }}
                        >
                           <motion.h1
                              className='paperLogy'
                              variants={{
                                 offscreen: { y: '150%',},
                                 onscreen: { y: 0, transition: { duration: 0.5, delay: 1.7,},},
                              }}
                           >
                              무인 성인 웰니스 매장
                           </motion.h1>
                        </motion.div>
                     </div>
                  </div>

                  <motion.img 
                     className={styles.pakage_card}
                     src="/img/hero/package_card.png" alt="패키지 카드"
                     variants={cardVariants}  
                  />
               </div>
            </motion.figure>
            
            {/* 키워드 */}
            <KeywordBox />
            
            {/* 말풍선 */}
            <div className={clsx(styles.talk_bubble, styles.bubble01)}>
               <motion.img 
                  variants={bubbleVariants}
                  src="/img/hero/talk_bubble_01.png" alt="평균 매출 3000만원" className={styles.circle_img} 
               />
            </div>

            <div className={clsx(styles.talk_bubble, styles.bubble02)}>
               <motion.img 
                  variants={bubbleVariants}
                  src="/img/hero/talk_bubble_02.png" alt="점주 순이익 30~40%" className={styles.circle_img} 
               />
            </div>
         </article>
      </motion.section>
   )
}