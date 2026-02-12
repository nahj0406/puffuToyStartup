import clsx from 'clsx'
import styles from './LocationSection.module.scss'
import ContainerV1 from '@/component/ContainerV1.tsx/ContainerV1'
import * as motion from "motion/react-client"
import { PointBox, RegulationBox, ButtonBox } from './client'

export default function LocationSection() {

   return (
      <section className={styles.location} id='location'>

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
                  창업할때 상권은 어디로 해야 하나?
               </motion.span>

               <motion.h2 
                  className='paperLogy'
                  variants={{
                     offscreen: { y: -10, opacity: 0,},
                     onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5,},},
                  }}
               >
                  푸푸토이는 <span className='title_deco'>상권</span> <br />
                  선택도 <span className='title_deco'>걱정 없습니다</span>
               </motion.h2>

               <motion.p
                  variants={{
                     offscreen: { y: -10, opacity: 0,},
                     onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.7,},},
                  }}
               >
                  푸푸토이는 <b>유동인구가 많지 않아도,</b> 일정 반경 <br />
                  내 수요만 확보되면 운영이 가능합니다.
               </motion.p>
            </div>
         </motion.div>

         <div className={styles.wrap_container}>
            <ContainerV1 className={styles.wrapper}>
               <PointBox />
            </ContainerV1>
   
            <ContainerV1>
               <motion.div 
                  className={styles.wrapper} 
                  id={'location_check'}
                  initial='offscreen'
                  whileInView='onscreen'
                  viewport={{amount: 0.2, once: true}}
                  variants={{
                     offscreen: { y: 50, opacity: 0,},
                     onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.3,},},
                  }}
               >
                  <div className={styles.analysis_box}>
                     <div className={styles.title_box}>
                        <motion.div 
                           className={styles.title}
                           initial='offscreen'
                           whileInView='onscreen'
                           viewport={{amount: 0.5, once: true}}
                           variants={{
                              offscreen: { y: 30, opacity: 0,},
                              onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5,},},
                           }}
                        >
                           <span className='paperLogy'>매물찾기부터 규제 검토까지</span>
                           <h2 className='paperLogy'>본사가 함께합니다</h2>
                        </motion.div>
         
                        <motion.p 
                           className='paperLogy'
                           initial='offscreen'
                           whileInView='onscreen'
                           viewport={{amount: 0.5, once: true}}
                           variants={{
                              offscreen: { y: 30, opacity: 0,},
                              onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.7,},},
                           }}
                        >
                           성인용품 관련 업종은 청소년 출입 · 고용 제한, 교육환경보호구역 등 <br /> 
                           입지에 대한 사전 검토가 반드시 필요한 업종입니다.
                        </motion.p>
                     </div>
         
                     <motion.div 
                        className={styles.mapBox}
                        initial='offscreen'
                        whileInView='onscreen'
                        viewport={{amount: 0.3, once: true}}
                        variants={{
                           offscreen: { y: 30, opacity: 0,},
                           onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5,},},
                        }}
                     >
                        <figure className={styles.img_box}>
                           <img src="/img/location/safe_map.png" alt="맵 이미지" />
      
                           <ul className={styles.color_check}>
                              <li className={clsx(styles.unit, styles.red)}>
                                 <span className={styles.dote}></span>
                                 <p>절대 보호구역</p>
                              </li>
         
                              <li className={clsx(styles.unit, styles.blue)}>
                                 <span className={styles.dote}></span>
                                 <p>상대 보호구역</p>
                              </li>
         
                              <li className={clsx(styles.unit, styles.green)}>
                                 <span className={styles.dote}></span>
                                 <p>학교 부지</p>
                              </li>
                           </ul>
                        </figure>
                        
                        {/*  교육환경보호구역 체크리스트 */}
                        <RegulationBox />
                     </motion.div>
         
                     <motion.p 
                        className={clsx(styles.sub_txt, 'paperLogy')}
                        initial='offscreen'
                        whileInView='onscreen'
                        viewport={{amount: 0.5, once: true}}
                        variants={{
                           offscreen: { y: 30, opacity: 0,},
                           onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.3,},},
                        }}
                     >
                        처음 창업을 준비하시는 분들이 어려워하고 불안해하는 부분에서 <br />
                        푸푸토이는 입지 단계부터 본사가 함께 검토하는 구조를 운영하고 있습니다.
                     </motion.p>
      
                     <motion.p 
                        className={styles.sub_txt2}
                        initial='offscreen'
                        whileInView='onscreen'
                        viewport={{amount: 0.5, once: true}}
                        variants={{
                           offscreen: { y: 30, opacity: 0,},
                           onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.3,},},
                        }}
                     >
                        ※ 입지 조건 확인 시 사이트에 접속하여 검색창에 입점하시려는 주소를 입력해 주세요.
                     </motion.p>
                     
                     <ButtonBox />
                  </div>
               </motion.div>
            </ContainerV1>
         </div>
      </section>
   )
}