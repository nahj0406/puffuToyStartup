import clsx from 'clsx'
import styles from './WhyUsSection.module.scss'
import ContainerV1 from '@/component/ContainerV1.tsx/ContainerV1'
import TextSlide from '@/component/TextSlide.tsx/TextSlide'
import * as motion from "motion/react-client"
import type { Variants } from "motion/react"

export default function WhyUsSection() {
   const cardVariants: Variants = {
      offscreen: {
         y: 40,
         opacity: 0,
      },
      onscreen: {
         y: 0,
         opacity: 1,
         transition: {
            // type: "spring",
            // bounce: 0.4,
            duration: 0.5,
            delay: 0.3,
         },
      },
   }
   return (
      <>
         <TextSlide />
         <section className={styles.WhyUs} id='whyUs'>
            <img src="/img/whyUs/rotate_circle.png" alt="로고 써클" className={clsx(styles.logo_circle, styles.circle01)} />
            <img src="/img/whyUs/rotate_circle.png" alt="로고 써클" className={clsx(styles.logo_circle, styles.circle02)} />
   
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
                        인건비는 ZERO, 수익은 꾸준히 UP!
                     </motion.span>
   
                     <motion.h2 
                        className='paperLogy'
                        variants={{
                           offscreen: { y: -10, opacity: 0,},
                           onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5,},},
                        }}
                     >
                        왜 <span className='title_deco'>푸푸토이</span>와 <br />
                        <span className={clsx(styles.img_deco, 'title_deco')}>창업</span> 해야 할까요?
                     </motion.h2>
                  </div>
               </motion.div>
   
               <div className={styles.itemBox_container}>
                  <motion.div 
                     className={clsx(styles.itemBox, styles.item01)}
                     initial='offscreen'
                     whileInView='onscreen'
                     viewport={{amount: 0.2, once: true}}
                     variants={{
                        offscreen: { y: -10, opacity: 0,},
                        onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.3,},},
                     }}
                  >
                     <div className={styles.content_wrap}>
                        <div className={styles.point_header}>
                           <span className='poppins'>창업경쟁력 01</span>
                           <div className={styles.line}></div>
                        </div>
      
                        <article className={styles.content}>
                           <div className={styles.content_title}>
                              <motion.h3 
                                 className='paperLogy'
                                 variants={{
                                    offscreen: { y: 30, opacity: 0,},
                                    onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5,},},
                                 }}
                              >
                                 요즘 치솟는 <span className='title_deco'>인건비</span> <br />
                                 푸푸토이는 <span className='title_deco'>해방</span> 입니다.
                              </motion.h3>
      
                              <motion.p
                                 variants={{
                                    offscreen: { y: 30, opacity: 0,},
                                    onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.7,},},
                                 }}
                              >
                                 푸푸토이는 <b>24시 관제 시스템</b>과 <b>자동화 키오스크 결제 시스템</b>으로 <br />
                                 매장에 인력이 상주할 필요가 없습니다.
                              </motion.p>
                           </div>
      
                           <ul className={styles.list}>
                              <motion.li
                                 variants={{
                                    offscreen: { y: 30, opacity: 0,},
                                    onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.9,},},
                                 }}
                              >
                                 <img src="/img/whyUs/step1_img01.png" alt="아이템1 이미지" />
                                 <div className={styles.txt_box}>
                                    <h5>24시간 관제 시스템</h5>
                                    <p>
                                       본사에서 24시간 매장 모니터링하여 <br />
                                       각종 민원 대신 처리
                                    </p>
                                 </div>
                              </motion.li>
      
                              <motion.li
                                 variants={{
                                    offscreen: { y: 30, opacity: 0,},
                                    onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 1.1,},},
                                 }}
                              >
                                 <img src="/img/whyUs/step1_img02.png" alt="아이템1 이미지" />
                                 <div className={styles.txt_box}>
                                    <h5>자동 결제 시스템</h5>
                                    <p>
                                       직원의 개입 없이 고객이 키오스크에서 <br />
                                       스스로 결제를 진행
                                    </p>
                                 </div>
                              </motion.li>
      
                              <motion.li
                                 variants={{
                                    offscreen: { y: 30, opacity: 0,},
                                    onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 1.3,},},
                                 }}
                              >
                                 <img src="/img/whyUs/step1_img03.png" alt="아이템1 이미지" />
                                 <div className={styles.txt_box}>
                                    <h5>매장 관리 토탈 케어</h5>
                                    <p>
                                       매장 청소, 물품 입고까지 <br />
                                       본사에서 직접 관리
                                    </p>
                                 </div>
                              </motion.li>
                           </ul>
                        </article>
                     </div>   
                  </motion.div>
   
   
                  <motion.div 
                     className={clsx(styles.itemBox, styles.item02)}
                     initial='offscreen'
                     whileInView='onscreen'
                     viewport={{amount: 0.2, once: true}}
                     variants={{
                        offscreen: { y: -10, opacity: 0,},
                        onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.3,},},
                     }}
                  >
                     <div className={styles.content_wrap}>
                        <div className={styles.point_header}>
                           <span className='poppins'>창업경쟁력 02</span>
                           <div className={styles.line}></div>
                        </div>
      
                        <article className={styles.content}>
                           <div className={styles.content_title}>
                              <motion.h3 
                                 className='paperLogy'
                                 variants={{
                                    offscreen: { y: 30, opacity: 0,},
                                    onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5,},},
                                 }}
                              >
                                 창업 이후 발생하는 <br className={styles.mob_br} />
                                 <span className='title_deco'>추가 비용</span> <br />
                                 푸푸토이는 <br className={styles.mob_br} />
                                 <span className='title_deco'>걱정하지 마세요</span>
                              </motion.h3>
      
                              <motion.p
                                 variants={{
                                    offscreen: { y: 30, opacity: 0,},
                                    onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.7,},},
                                 }}
                              >
                                 푸푸토이는 <b>무재고 위탁 시스템</b>을 채택하여 타 무인매장처럼 
                                 오픈 초기에 <b>재고 부담</b>을 떠안지 않으셔도 됩니다. 
                              </motion.p>
                           </div>
      
                           <ul className={styles.list}>
                              <motion.li
                                 variants={{
                                    offscreen: { y: 30, opacity: 0,},
                                    onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.9,},},
                                 }}
                              >
                                 <img src="/img/whyUs/step2_img01.png" alt="아이템2 이미지" />
                                 <div className={styles.txt_box}>
                                    <h5>무재고 위탁 시스템</h5>
                                    <p>
                                       점주가 상품 재고를 직접 사서 <br />
                                       보유하지 않고 본사가 위탁 형태로 <br />
                                       상품을 보유·관리
                                    </p>
                                 </div>
                              </motion.li>
      
                              <motion.li
                                 variants={{
                                    offscreen: { y: 30, opacity: 0,},
                                    onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 1.1,},},
                                 }}
                              >
                                 <img src="/img/whyUs/step2_img02.png" alt="아이템2 이미지" />
                                 <div className={styles.txt_box}>
                                    <h5>키오스크 자동 업데이트</h5>
                                    <p>
                                       신규제품 매입할 필요 없이 키오스크가 <br />
                                       자동 신제품 업데이트로 부가적 지출 감소
                                    </p>
                                 </div>
                              </motion.li>
      
                              <motion.li
                                 variants={{
                                    offscreen: { y: 30, opacity: 0,},
                                    onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 1.3,},},
                                 }}
                              >
                                 <img src="/img/whyUs/step2_img03.png" alt="아이템2 이미지" />
                                 <div className={styles.txt_box}>
                                    <h5>비용 없이 다양한 제품 보유</h5>
                                    <p>
                                       재고 부담 없이 최신 트렌드부터 <br />
                                       비주류 상품까지 다양한 라인업 보유 가능
                                    </p>
                                 </div>
                              </motion.li>
                           </ul>
                        </article>
                     </div>   
                  </motion.div>
   
   
                  <motion.div 
                     className={clsx(styles.itemBox, styles.item03)}
                     initial='offscreen'
                     whileInView='onscreen'
                     viewport={{amount: 0.2, once: true}}
                     variants={{
                        offscreen: { y: -10, opacity: 0,},
                        onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.3,},},
                     }}
                  >
                     <div className={styles.content_wrap}>
                        <div className={styles.point_header}>
                           <span className='poppins'>창업경쟁력 03</span>
                           <div className={styles.line}></div>
                        </div>
      
                        <article className={styles.content}>
                           <div className={styles.content_title}>
                              <motion.h3 
                                 className='paperLogy'
                                 variants={{
                                    offscreen: { y: 30, opacity: 0,},
                                    onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5,},},
                                 }}
                              >
                                 <span className='title_deco'>창업</span> <br className={styles.mob_br} /> 한번도 안해보셨다구요? <br className={styles.mob_br} /> <br />
                                 <span className='title_deco'>문제 없습니다!</span>
                              </motion.h3>
      
                              <motion.p
                                 variants={{
                                    offscreen: { y: 30, opacity: 0,},
                                    onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.7,},},
                                 }}
                              >
                                 푸푸토이는 <b>업종 전문지식</b>이 하나 없어도, <br />
                                 무인매장 창업이 <b>처음이셔도</b> 아무런 문제가 없습니다.
                              </motion.p>
                           </div>
      
                           <ul className={styles.list}>
                              <motion.li
                                 variants={{
                                    offscreen: { y: 30, opacity: 0,},
                                    onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.9,},},
                                 }}
                              >
                                 <img src="/img/whyUs/step3_img01.png" alt="아이템3 이미지" />
                                 <div className={styles.txt_box}>
                                    <h5>자동 발주 시스템</h5>
                                    <p>
                                       필요한 상품을 시스템이 계산하고 <br />
                                       자동으로 발주 처리
                                    </p>
                                 </div>
                              </motion.li>
      
                              <motion.li
                                 variants={{
                                    offscreen: { y: 30, opacity: 0,},
                                    onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 1.1,},},
                                 }}
                              >
                                 <img src="/img/whyUs/step3_img02.png" alt="아이템3 이미지" />
                                 <div className={styles.txt_box}>
                                    <h5>전문지식 없어도 OK</h5>
                                    <p>
                                       업종 전문 지식이 하나 없어도 <br />
                                       알아서 운영되는 자동화 매장
                                    </p>
                                 </div>
                              </motion.li>
      
                              <motion.li
                                 variants={{
                                    offscreen: { y: 30, opacity: 0,},
                                    onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 1.3,},},
                                 }}
                              >
                                 <img src="/img/whyUs/step3_img03.png" alt="아이템3 이미지" />
                                 <div className={styles.txt_box}>
                                    <h5>오픈 이후도 계속 되는 케어</h5>
                                    <p>
                                       매장 오픈 이후에도 점주의 운영 부담을 <br />
                                       덜기 위해 본사가 지속적으로 <br />
                                       관리와 케어 지원
                                    </p>
                                 </div>
                              </motion.li>
                           </ul>
                        </article>
                     </div>   
                  </motion.div>
               </div>
            </ContainerV1>
         </section>
      </>
   )
}