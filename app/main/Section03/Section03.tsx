import clsx from 'clsx'
import styles from './Section03.module.css'
import ContainerV1 from '@/component/ContainerV1.tsx/ContainerV1'
import * as motion from "motion/react-client"
import { ButtonBox, SlideBox } from './client'

export default function Section03() {
   return (
      <section className={styles.sec3}>
         <div className={'black_title_header'}>
            <ContainerV1 className={styles.wrapper}>
               <div className='black_title'>
                  <span className='paperLogy title_deco_circle'>무인성인용품은</span>
                  <h2 className='paperLogy'>상권을 타지 않습니다</h2>
               </div>
            </ContainerV1>
         </div>

         <div className={styles.wrap_container}>
            <ContainerV1 className={styles.wrapper}>
               <div className={styles.itemBox}>
                  <motion.div 
                     className={styles.text_box}
                     initial='offscreen'
                     whileInView='onscreen'
                     viewport={{amount: 0.5, once: true}}
                  >
                     <motion.h3 
                        className='paperLogy'
                        variants={{
                           offscreen: { y: 30, opacity: 0,},
                           onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.3,},},
                        }}
                     >
                        <span className='title_deco'>필요해서 찾아오는</span> 목적형 <br />
                        소비 지중이 높은 사업
                     </motion.h3>
                     <motion.p
                        variants={{
                           offscreen: { y: 30, opacity: 0,},
                           onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5,},},
                        }}
                     >
                        <b>유동인구가 많지 않아도,</b> 일정 반경 <br />
                        내 수요만 확보되면 운영이 가능합니다.
                     </motion.p>
                  </motion.div>
   
                  <motion.figure 
                     className={styles.img_box}
                     initial='offscreen'
                     whileInView='onscreen'
                     viewport={{amount: 0.5, once: true}}
                     variants={{
                        offscreen: { y: 50, opacity: 0,},
                        onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.3,},},
                     }}
                  >
                     <div className={styles.unit}>
                        <img src="/img/sec3/item1_img01.png" alt="상가 이미지1" className={styles.img} />
   
                        <div className={styles.unit_txt}>
                           <span className={clsx(styles.title_point, 'poppins')}>point 1</span>
                           <p>
                              지하~ 지상 1층 메인 상권이 아니라도 <br />
                              운영 가능(동선/간판/안내 설계로 보완)
                           </p>
                        </div>
                     </div>
   
                     <div className={styles.unit}>
                        <img src="/img/sec3/item1_img02.png" alt="야간 심야1" className={styles.img} />
   
                        <div className={styles.unit_txt}>
                           <span className={clsx(styles.title_point, 'poppins')}>point 2</span>
                           <p>
                              야간 · 심야 시간대 매출이 발생할 수 <br />
                              있어 상권의 시간대 한계 보완 가능
                           </p>
                        </div>
                     </div>
                  </motion.figure>
               </div>
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
                  <div className={styles.location_box}>
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
                        viewport={{amount: 0.5, once: true}}
                        variants={{
                           offscreen: { y: 30, opacity: 0,},
                           onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5,},},
                        }}
                     >
                        <figure className={styles.img_box}>
                           <img src="/img/sec3/safe_map.png" alt="맵 이미지" />
      
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
                        <SlideBox />
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