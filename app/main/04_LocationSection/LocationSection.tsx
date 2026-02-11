import clsx from 'clsx'
import styles from './LocationSection.module.css'
import ContainerV1 from '@/component/ContainerV1.tsx/ContainerV1'
import * as motion from "motion/react-client"
import { ButtonBox, SlideBox } from './client'

export default function LocationSection() {

   return (
      <section className={styles.location}>

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

               <motion.p>
                  푸푸토이는 <b>유동인구가 많지 않아도,</b> 일정 반경 <br />
                  내 수요만 확보되면 운영이 가능합니다.
               </motion.p>
            </div>
         </motion.div>

         <div className={styles.wrap_container}>
            <ContainerV1 className={styles.wrapper}>
               <div className={styles.itemBox}>

                  <motion.figure 
                     className={styles.item}
                     initial='offscreen'
                     whileInView='onscreen'
                     viewport={{amount: 0.3, once: true}}
                     variants={{
                        offscreen: { y: 50, opacity: 0,},
                        onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.3,},},
                     }}
                  >
                     <span className={clsx(styles.title_point, 'poppins')}>point 1</span>

                     <div className={styles.unit}>
                        <img src="/img/location/item1_img01.png" alt="상가 이미지1" className={styles.img} />
   
                        <div className={styles.txt_box}>
                           <h5 className='paperLogy'><span>일정 반경 내</span> 수요만 확보되면 운영 가능</h5>

                           <p>
                              성인용품은 제품 특성상 <b>타업종 대비 높은 단가</b>로 <br />
                              적은 판매량으로도 임대료와 운영비 충당이 <br />
                              비교적 수월합니다.
                           </p>
                        </div>
                     </div>
                  </motion.figure>

                  <motion.figure 
                     className={styles.item}
                     initial='offscreen'
                     whileInView='onscreen'
                     viewport={{amount: 0.3, once: true}}
                     variants={{
                        offscreen: { y: 50, opacity: 0,},
                        onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.3,},},
                     }}
                  >
                     <span className={clsx(styles.title_point, 'poppins')}>point 2</span>

                     <div className={styles.unit}>
                        <img src="/img/location/item1_img02.png" alt="상가 이미지2" className={styles.img} />
   
                        <div className={styles.txt_box}>
                           <h5 className='paperLogy'><span>메인 상권</span>이 아니라도 운영 가능</h5>
                           
                           <p>
                              준비된 동선과 간판 + 안내 설계로 고객들의 이목을 <br />
                              끌어 <b>직관적으로 매장 위치</b>를 알릴 수 있습니다.
                           </p>
                        </div>
                     </div>
                  </motion.figure>

                  <motion.figure 
                     className={styles.item}
                     initial='offscreen'
                     whileInView='onscreen'
                     viewport={{amount: 0.3, once: true}}
                     variants={{
                        offscreen: { y: 50, opacity: 0,},
                        onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.3,},},
                     }}
                  >
                     <span className={clsx(styles.title_point, 'poppins')}>point 3</span>

                     <div className={styles.unit}>
                        <img src="/img/location/item1_img03.png" alt="상가 이미지2" className={styles.img} />
   
                        <div className={styles.txt_box}>
                           <h5 className='paperLogy'>소비 목적이 분명한 <span>목적형 구매</span></h5>
                           
                           <p>
                              매장 방문객의 대다수는 이미 구매 의사를 결정하고 <br />
                              방문하기 때문에 <span>구매 전환율</span>이 타업종 대비 높습니다.
                           </p>
                        </div>
                     </div>
                  </motion.figure>

                  <motion.figure 
                     className={styles.item}
                     initial='offscreen'
                     whileInView='onscreen'
                     viewport={{amount: 0.3, once: true}}
                     variants={{
                        offscreen: { y: 50, opacity: 0,},
                        onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.3,},},
                     }}
                  >
                     <span className={clsx(styles.title_point, 'poppins')}>point 4</span>

                     <div className={styles.unit}>
                        <img src="/img/location/item1_img04.png" alt="상가 이미지2" className={styles.img} />
   
                        <div className={styles.txt_box}>
                           <h5 className='paperLogy'><span>야간 · 심야</span> 시간대에도 매출 발생</h5>
                           
                           <p>
                              야간과 심야 시간에는 <span>유흥가나 일반 데이트 커플</span> 등의 <br />
                              수요가 증가하는 시간대로 24시간 상시 운영중인 <br />
                              매장의 특성으로 <span>야간 매출</span>을 충분히 기대할 수 있습니다.
                           </p>
                        </div>
                     </div>
                  </motion.figure>

                  <motion.figure 
                     className={styles.item}
                     initial='offscreen'
                     whileInView='onscreen'
                     viewport={{amount: 0.3, once: true}}
                     variants={{
                        offscreen: { y: 50, opacity: 0,},
                        onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.3,},},
                     }}
                  >
                     <span className={clsx(styles.title_point, 'poppins')}>point 5</span>

                     <div className={styles.unit}>
                        <img src="/img/location/item1_img05.png" alt="상가 이미지2" className={styles.img} />
   
                        <div className={styles.txt_box}>
                           <h5 className='paperLogy'><span>자체 쇼핑몰 운영</span>으로 온라인 유저 유입</h5>
                           
                           <p>
                              푸푸토이 온라인 쇼핑몰의 <span>자체 픽업 시스템</span>을 <br />
                              통해 인근 거주 온라인 고객의 구매까지 <br />
                              <span>오프라인 매출</span>로 연결할 수 있습니다.
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