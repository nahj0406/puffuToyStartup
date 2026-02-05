import clsx from 'clsx'
import styles from './Section04.module.css'
import ContainerV1 from '@/component/ContainerV1.tsx/ContainerV1'
import * as motion from "motion/react-client"
import isMobile from 'shared/utils/isMobile'

export default function Section04() {
   return (
      <section className={styles.sec4} id='section2'>
         <div className={'black_title_header'}>
            <ContainerV1 className={styles.wrapper}>
               <div className='black_title'>
                  <span className='paperLogy title_deco_circle'>차별화된 브랜드 방향성</span>
                  <h2 className='paperLogy'>푸푸토이만의 창업경쟁력</h2>
               </div>
            </ContainerV1>
         </div>

         <div className={clsx(styles.sec_wrapper, styles.step1)}>
            <ContainerV1 className={styles.wrapper}>
               <article className={styles.titleBox}>
                  <div className={styles.title}>
                     <motion.span 
                        className={clsx(styles.step_txt, 'poppins')}
                        initial='offscreen'
                        whileInView='onscreen'
                        viewport={{amount: 0.3, once: true}}
                        variants={{
                           offscreen: { x: -10, opacity: 0,},
                           onscreen: { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.3,},},
                        }}
                     >
                        step 1
                     </motion.span>
                     <motion.h2 
                        className='paperLogy'
                        initial='offscreen'
                        whileInView='onscreen'
                        viewport={{amount: 0.3, once: true}}
                        variants={{
                           offscreen: { y: 10, opacity: 0,},
                           onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5,},},
                        }}
                     >
                        <b className='title_deco2'><span>프라이빗한 동선</span></b> 설계 <br />
                         + 온/오프라인 픽업
                     </motion.h2>
                  </div>
   
                  <div className={styles.txt_box}>
                     <motion.p
                        initial='offscreen'
                        whileInView='onscreen'
                        viewport={{amount: 0.3, once: true}}
                        variants={{
                           offscreen: { y: 10, opacity: 0,},
                           onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.7,},},
                        }}
                     >
                        푸푸토이는 <b>프라이버시 중심</b>의 동선 설계로 타인의 시선과 불필요한 접촉을 <br />
                        최소화해 매장 안에서 머무는 모든 시간은 타인의 시선이 아닌 본인의 <br />
                        선택에만 집중할 수 있도록 구성되어 있습니다. 
                     </motion.p>
      
                     <motion.p
                        initial='offscreen'
                        whileInView='onscreen'
                        viewport={{amount: 0.3, once: true}}
                        variants={{
                           offscreen: { y: 10, opacity: 0,},
                           onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.9,},},
                        }}
                     >
                        또한 자체 쇼핑몰 운영으로 온라인 유저도 가까운 매장을 방문하여 <br />
                        픽업 서비스로 상품을 받아볼 수 있습니다.
                     </motion.p>
                  </div>
               </article>
   
               <div className={styles.itemBox}>
                  <motion.article 
                     className={styles.item}
                     initial='offscreen'
                     whileInView='onscreen'
                     viewport={{amount: 0.2, once: true}}
                     variants={{
                        offscreen: { y: 20, opacity: 0,},
                        onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.3,},},
                     }}
                  >
                     <figure className={styles.img}>
                        <img src="/img/sec4/sec4_step1_icon01.png" alt="sec4_아이콘" />
                     </figure>

                     <div className={styles.txt_box}>
                        <h5 className='paperLogy'>1 성인인증 후 매장 입장</h5>
                        <p>
                           안전하게 성인인증을 거쳐야만 입장할 수 있어 <br />
                           미성년자 출입 문제를 원천 차단합니다
                        </p>
                     </div>
                  </motion.article>
   
                  <motion.article 
                     className={styles.item}
                     initial='offscreen'
                     whileInView='onscreen'
                     viewport={{amount: 0.2, once: true}}
                     variants={{
                        offscreen: { y: 20, opacity: 0,},
                        onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: isMobile ? 0.3 : 0.5,},},
                     }}
                  >
                     <figure className={styles.img}>
                        <img src="/img/sec4/sec4_step1_icon02.png" alt="sec4_아이콘" />
                     </figure>

                     <div className={styles.txt_box}>
                        <h5 className='paperLogy'>2 프라이빗 라운지에서 편하게 탐색</h5>
                        <p>
                           입구를 지나면 나오는 준비된 프라이빗 라운지에서 <br />
                           원하시는 상품을 편하게 둘러보실 수 있습니다.
                        </p>
                     </div>
                  </motion.article>
   
                  <motion.article 
                     className={styles.item}
                     initial='offscreen'
                     whileInView='onscreen'
                     viewport={{amount: 0.2, once: true}}
                     variants={{
                        offscreen: { y: 20, opacity: 0,},
                        onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: isMobile ? 0.3 : 0.7,},},
                     }}
                  >
                     <figure className={styles.img}>
                        <img src="/img/sec4/sec4_step1_icon03.png" alt="sec4_아이콘" />
                     </figure>

                     <div className={styles.txt_box}>
                        <h5 className='paperLogy'>3 자판기 픽업/결제</h5>
                        <p>
                           프라이빗 라운지에서 상품 선택 후 <br />
                           결제룸으로 이동하여 상품을 수령하면 끝.
                        </p>
                     </div>
                  </motion.article>
   
                  <motion.article 
                     className={styles.item}
                     initial='offscreen'
                     whileInView='onscreen'
                     viewport={{amount: 0.2, once: true}}
                     variants={{
                        offscreen: { y: 20, opacity: 0,},
                        onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: isMobile ? 0.3 : 0.9,},},
                     }}
                  >
                     <figure className={styles.img}>
                        <img src="/img/sec4/sec4_step1_icon04.png" alt="sec4_아이콘" />
                     </figure>

                     <div className={styles.txt_box}>
                        <h5 className='paperLogy'>온라인 주문 후 오프라인 픽업 가능</h5>
                        <p>
                           온라인으로 주문한 유저는 가까운 매장을 찾아 <br />
                           곧바로 결제룸에서 픽업 상품을 수령 받을 수 있습니다.
                        </p>
                     </div>
                  </motion.article>
               </div>
            </ContainerV1>
            <motion.img 
               className={styles.logo_img}
               src="/img/sec4/sec4_step1_logo.png" alt="로고" 
            />
         </div>


         <div className={clsx(styles.sec_wrapper, styles.step2)}>
            <ContainerV1 className={styles.wrapper}>
               <article className={styles.titleBox}>
                  <div className={styles.title}>
                     <motion.span 
                        className={clsx(styles.step_txt, 'poppins')}
                        initial='offscreen'
                        whileInView='onscreen'
                        viewport={{amount: 0.3, once: true}}
                        variants={{
                           offscreen: { x: -10, opacity: 0,},
                           onscreen: { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.3,},},
                        }}
                     >
                        step 2
                     </motion.span>
                     <motion.h2 
                        className='paperLogy'
                        initial='offscreen'
                        whileInView='onscreen'
                        viewport={{amount: 0.3, once: true}}
                        variants={{
                           offscreen: { y: 10, opacity: 0,},
                           onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5,},},
                        }}
                     >
                         24시간 관제 + <br />
                         <b className='title_deco2'><span>자동 발주 시스템</span></b>
                     </motion.h2>
                  </div>
   
                  <div className={styles.txt_box}>
                     <motion.p
                        initial='offscreen'
                        whileInView='onscreen'
                        viewport={{amount: 0.3, once: true}}
                        variants={{
                           offscreen: { y: 10, opacity: 0,},
                           onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.7,},},
                        }}
                     >
                        <b>24시간 관제 시스템</b>을 통해 매장 내 기기 상태, 결제 상황, <br />
                        이상 여부를 상시 모니터링하며 <b>자동발주 시스템</b>으로 불필요한 <br />
                        수동 관리 부담은 줄였습니다.
                     </motion.p>
                  </div>
               </article>
   
               <div className={styles.itemBox}>
                  <motion.article 
                     className={styles.item}
                     initial='offscreen'
                     whileInView='onscreen'
                     viewport={{amount: 0.2, once: true}}
                     variants={{
                        offscreen: { y: 20, opacity: 0,},
                        onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.3,},},
                     }}
                  >
                     <figure className={styles.img}>
                        <img src="/img/sec4/sec4_step2_icon01.png" alt="sec4_아이콘" />
                     </figure>

                     <div className={styles.txt_box}>
                        <h5 className='paperLogy'>진짜 걱정 없는 무인 환경</h5>
                        <p>
                           매장내 기기 상태와, 결제 상황, 이상 <br />
                           여부를 상시 모니터링 하여 진정한 안정적 <br />
                           운영 환경을 유지합니다.
                        </p>
                     </div>
                  </motion.article>
   
                  <motion.article 
                     className={styles.item}
                     initial='offscreen'
                     whileInView='onscreen'
                     viewport={{amount: 0.2, once: true}}
                     variants={{
                        offscreen: { y: 20, opacity: 0,},
                        onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: isMobile ? 0.3 : 0.5,},},
                     }}
                  >
                     <figure className={styles.img}>
                        <img src="/img/sec4/sec4_step2_icon02.png" alt="sec4_아이콘" />
                     </figure>

                     <div className={styles.txt_box}>
                        <h5 className='paperLogy'>매장이 스스로 채우는 자동 발주 시스템</h5>
                        <p>
                           부족한 상품을 감지해 발주까지 연동하여 품절은 <br />
                           줄이고 재고 관리는 더욱 효율적으로 만듭니다.
                        </p>
                     </div>
                  </motion.article>
               </div>
            </ContainerV1>
         </div>


         <div className={clsx(styles.sec_wrapper, styles.step3)}>
            <ContainerV1 className={styles.wrapper}>
               <article className={styles.titleBox}>
                  <div className={styles.title}>
                     <motion.span 
                        className={clsx(styles.step_txt, 'poppins')}
                        initial='offscreen'
                        whileInView='onscreen'
                        viewport={{amount: 0.3, once: true}}
                        variants={{
                           offscreen: { x: -10, opacity: 0,},
                           onscreen: { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.3,},},
                        }}
                     >
                        step 3
                     </motion.span>
                     <motion.h2 
                        className='paperLogy'
                        initial='offscreen'
                        whileInView='onscreen'
                        viewport={{amount: 0.3, once: true}}
                        variants={{
                           offscreen: { y: 10, opacity: 0,},
                           onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5,},},
                        }}
                     >
                         무재고 위탁 시스템으로 <br />
                         <b className='title_deco2'><span>'재고 리스크'</span></b> 최소화
                     </motion.h2>
                  </div>
   
                  <div className={styles.txt_box}>
                     <motion.p
                        initial='offscreen'
                        whileInView='onscreen'
                        viewport={{amount: 0.3, once: true}}
                        variants={{
                           offscreen: { y: 10, opacity: 0,},
                           onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.7,},},
                        }}
                     >
                        푸푸토이는 위탁 기반 상품 운영 시스템을 통해 <b>점주의 재고 부담</b>을 <br />
                        최소화하고 판매된 수량 기준으로 정산되는 구조입니다. 
                     </motion.p>

                     <motion.p
                        initial='offscreen'
                        whileInView='onscreen'
                        viewport={{amount: 0.3, once: true}}
                        variants={{
                           offscreen: { y: 10, opacity: 0,},
                           onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.9,},},
                        }}
                     >
                        이로 인해 초기 재고 매입 비용을 줄이고, 유행 · 회전율에 <br />
                        따른 <b>재고 리스크를 최소화</b>할 수 있습니다.
                     </motion.p>
                  </div>
               </article>
   
               <div className={styles.itemBox}>
                  <motion.article 
                     className={styles.item}
                     initial='offscreen'
                     whileInView='onscreen'
                     viewport={{amount: 0.2, once: true}}
                     variants={{
                        offscreen: { y: 20, opacity: 0,},
                        onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.3,},},
                     }}
                  >
                     <figure className={styles.img}>
                        <img src="/img/sec4/sec4_step3_icon01.png" alt="sec4_아이콘" />
                     </figure>

                     <div className={styles.txt_box}>
                        <h5 className='paperLogy'>초보자도 시작하기 쉬운 비용 절감</h5>
                        <p>
                           대량 재고 매입 없이 매장 운영이 가능해 초기 <br />
                           투자 비용과 자금 부담을 크게 낮춥니다.
                        </p>
                     </div>
                  </motion.article>
   
                  <motion.article 
                     className={styles.item}
                     initial='offscreen'
                     whileInView='onscreen'
                     viewport={{amount: 0.2, once: true}}
                     variants={{
                        offscreen: { y: 20, opacity: 0,},
                        onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: isMobile ? 0.3 : 0.5,},},
                     }}
                  >
                     <figure className={styles.img}>
                        <img src="/img/sec4/sec4_step3_icon02.png" alt="sec4_아이콘" />
                     </figure>

                     <div className={styles.txt_box}>
                        <h5 className='paperLogy'>재고 리스크 최소화로 운영 효율 극대화</h5>
                        <p>
                           사입 없이 브랜드 재고를 위탁 운영해 과잉 재고 <br />
                           · 미판매로 인한 손실 부담을 줄일 수 있습니다.
                        </p>
                     </div>
                  </motion.article>
               </div>
            </ContainerV1>
         </div>
      </section>
   )
}