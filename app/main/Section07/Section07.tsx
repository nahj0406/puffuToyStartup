import clsx from 'clsx'
import styles from './Section07.module.css'
import ContainerV1 from '@/component/ContainerV1.tsx/ContainerV1'
import { Caculator } from './client'
import * as motion from "motion/react-client"

export default function Section07() {

   return (
      <section className={styles.sec7} id='section3'>
         <ContainerV1 className={styles.wrapper}>
            <motion.div 
               className={styles.title_box}
               initial='offscreen'
               whileInView='onscreen'
               viewport={{amount: 0.5, once: true}}
            >
               <div className='normal_title_header'>
                  <motion.span 
                     className='paperLogy title_deco_circle'
                     variants={{
                        offscreen: { y: -10, opacity: 0,},
                        onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.3,},},
                     }}
                  >
                     창업비용 안내
                  </motion.span>
                  <motion.h2 
                     className='paperLogy'
                     variants={{
                        offscreen: { y: -10, opacity: 0,},
                        onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5,},},
                     }}
                  >
                     프라이빗함은 지키고, <br />
                     가격은 <span className='title_deco'>합리적</span>으로
                  </motion.h2>
               </div>
            </motion.div>

            <div className={styles.itemBox}>
               <motion.article 
                  className={clsx(styles.package_box, styles.toggle_box)}
                  initial='offscreen'
                  whileInView='onscreen'
                  viewport={{amount: 0.5, once: true}}
                  variants={{
                     offscreen: { y: -20, opacity: 0,},
                     onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.3,},},
                  }}
               >
                  <div className={styles.box_header}>
                     <h5 className='paperLogay'>1.2억 패키지</h5>
                     <span className='paperLogay'>(실내 추가 공사 비용 제외)</span>
                  </div>

                  <div className={styles.content}>
                     <div className={styles.unit}>
                        <img className={styles.icon_img} src="/img/sec7/sec7_signboard.png" alt="패키지 아이콘" />
                        <span>외부간판</span>
                     </div>
   
                     <div className={styles.unit}>
                        <img className={styles.icon_img} src="/img/sec7/sec7_outdoor_sign.png" alt="패키지 아이콘" />
                        <span>실내 외 사인물</span>
                     </div>
   
                     <div className={styles.unit}>
                        <img className={styles.icon_img} src="/img/sec7/sec7_interior.png" alt="패키지 아이콘" />
                        <span>인테리어 포함</span>
                     </div>
   
                     <div className={clsx(styles.unit, styles.kiosk_group)}>
                        <div className={clsx(styles.kiosk)}>
                           <img className={styles.icon_img} src="/img/sec7/sec7_kiosk.png" alt="패키지 아이콘" />
                           <span>자판기 12대</span>
                        </div>
   
                        <div className={styles.ca_icon}>
                           <img src="/img/sec7/sec7_kiosk_category.png" alt="= 기호" />
                        </div>
   
                        <div className={clsx(styles.kisok_item)}>
   
                           <figure className={styles.item_unit}>
                              <img src="/img/sec7/sec7_kiosk_coil.png" alt="패키지 아이콘" />
                              <span>스프링 4대</span>
                           </figure>
   
                           <figure className={styles.item_unit}>
                              <img src="/img/sec7/sec7_kiosk_cabinet.png" alt="패키지 아이콘" />
                              <span>캐비닛 8대</span>
                           </figure>
                        </div>
                     </div>
                  </div>
               </motion.article>

               <div className={styles.box_vertical_group}>
                  <motion.article 
                     className={clsx(styles.toggle_box)}
                     initial='offscreen'
                     whileInView='onscreen'
                     viewport={{amount: 0.5, once: true}}
                     variants={{
                        offscreen: { y: -20, opacity: 0,},
                        onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5,},},
                     }}
                  >
                     <div className={styles.box_header}>
                        <h5 className='paperLogay'>설치 기간</h5>
                     </div>
   
                     <div className={styles.content}>
                        <p className={styles.txt1}>평균 1개월</p>
                        <p className={styles.txt2}>(단, 자판기 수급 대기 가능성 고지)</p>
                     </div>
                  </motion.article>
   
                  <motion.article 
                     className={clsx(styles.toggle_box)}
                     initial='offscreen'
                     whileInView='onscreen'
                     viewport={{amount: 0.5, once: true}}
                     variants={{
                        offscreen: { y: -20, opacity: 0,},
                        onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.7,},},
                     }}
                  >
                     <div className={styles.box_header}>
                        <h5 className='paperLogay'>면적 가이드</h5>
                     </div>
   
                     <div className={styles.content}>
                        <p className={styles.txt1}>20평 이상 권장</p>
                        <p className={styles.txt2}>
                           (프라이빗 라운지 + 키오스크 4대
                           + 자판기 동선)
                        </p>
                     </div>
                  </motion.article>
               </div>
            </div>

            <Caculator />
         </ContainerV1>
      </section>
   )
}