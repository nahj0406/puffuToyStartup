import clsx from 'clsx'
import styles from './PrivacySection.module.scss'
import ContainerV1 from '@/component/ContainerV1.tsx/ContainerV1'
import * as motion from "motion/react-client"
import isMobile from 'shared/utils/isMobile'
import TextSlide from '@/component/TextSlide.tsx/TextSlide'

export default function PrivacySection() {

   const slideTxt = [
      'PUFFU TOY',
      'PUFFU TOY',
      'PUFFU TOY',
      'PUFFU TOY',
      'PUFFU TOY'
   ]

   return (
      <>
         <TextSlide txtArr={slideTxt} className={styles.privacy_line} />
         <section className={styles.privacy} id='privacy'>
            <motion.img 
               className={styles.logo_img}
               src="/img/privacy/privacy_step1_logo.png" alt="로고"
               initial='offscreen'
               whileInView='onscreen'
               viewport={{amount: 0.3, once: true}}
               variants={{
                  offscreen: { x: '-50%',},
                  onscreen: { x: 0, transition: { type: 'spring', duration: 1.5, delay: 0.3, velocity: 10,},},
               }}
            />
   
            <motion.div 
               className={clsx(styles.sec_wrapper, styles.step1)}
               initial='offscreen'
               whileInView='onscreen'
               viewport={{amount: 0.3, once: true}}
            >
               <ContainerV1>
                  <motion.div 
                     className={styles.title_box}
                     initial='offscreen'
                     whileInView='onscreen'
                     viewport={{amount: 0.3, once: true}}
                  >
                     <div className='normal_title_header'>
                        <motion.span 
                           className='paperLogy title_deco_circle'
                           variants={{
                              offscreen: { y: -10, opacity: 0,},
                              onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.3,},},
                           }}
                        >
                           푸푸토이만의 특별한
                        </motion.span>
         
                        <motion.h2 
                           className='paperLogy'
                           variants={{
                              offscreen: { y: -10, opacity: 0,},
                              onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5,},},
                           }}
                        >
                           <span className='title_deco'>프라이빗 동선</span> 설계
                        </motion.h2>
                     </div>
                  </motion.div>
               </ContainerV1>
   
               <ContainerV1 className={clsx(styles.wrapper, styles.stoer_wrapper)}>
                  <motion.article 
                     className={clsx(styles.store_box, styles.another_store)}
                     variants={{
                        offscreen: { x: -30, opacity: 0,},
                        onscreen: { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.7,},},
                     }}
                  >
                     <div className={styles.store_header}>
                        <p className='paperLogy'>타 무인 성인용품 매장 동선</p>
                     </div>

                     <div className={styles.content_box}>
                        <img className={styles.pc_img} src="/img/privacy/another_route.png" alt="타 매장 동선" />
                        <img className={styles.mob_img} src="/img/privacy/another_route_mob.png" alt="타 매장 동선" />

                        <ul className={styles.txt_list}>
                           <li>매장 입장 후 곧바로 상품 진열 공간 노출</li>

                           <li>매장 내 타 고객 있을 경우 서로 심리적 부담</li>

                           <li>
                              상품 선택을 위해 키오스크 앞에 서 있는 동안에도 <br />
                              다른 고객과 동선 문제로 시선에 대한 스트레스가 발생
                           </li>

                           <li>
                              체류 시간은 최소화 할 수 있을지라도 매장에 <br />
                              방문할 때마다 누군가 있는지 확인하게 되는 구조
                           </li>
                        </ul>
                     </div>
                  </motion.article>

                  <motion.img 
                     className={styles.vs_img}
                     src="/img/privacy/vs_icon.png" alt="vs"
                     variants={{
                        offscreen: { opacity: 0,},
                        onscreen: { opacity: 1, transition: { duration: 0.3, delay: 0.9,},},
                     }}
                  />

                  <motion.article 
                     className={clsx(styles.store_box, styles.privacy_store)}
                     variants={{
                        offscreen: { x: 30, opacity: 0,},
                        onscreen: { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.7,},},
                     }}
                  >
                     <div className={styles.store_header}>
                        <p className='paperLogy'>푸푸토이의 프라이빗 설계</p>
                     </div>

                     <div className={styles.content_box}>
                        <img className={styles.pc_img} src="/img/privacy/privacy_route.png" alt="푸푸토이 매장 동선" />
                        <img className={styles.mob_img} src="/img/privacy/privacy_route_mob.png" alt="푸푸토이 매장 동선" />

                        <div className={styles.list_box}>
                           <h3>
                              고객의 <span className='title_deco'>프라이버시</span>를 배려한 설계로 <br />
                              스트레스는 줄이고 <span className='title_deco'>재방문율</span>은 상승!
                           </h3>

                           <ul className={styles.txt_list}>
                              <li>
                                 매장 입장 후 즉각적 상품 노출 대신  프라이빗 라운지를 통해 <br />
                                 방문한 고객들에게 심리적 완충 공간을 제공합니다.
                              </li>
   
                              <li>
                                 편하게 머무르며 상품을 볼 수 있게 설계된 프라이빗 라운지에 <br />
                                 배치된 키오스크에서 차분하게 상품을 고를 수 있습니다.
                              </li>
   
                              <li>
                                 상품 선택이 끝나면 곧바로 분리된 결제룸으로 이동하여 다른 <br /> 
                                 고객과의 동선 겹침 없이 상품을 빠르게 수령하고 나갈 수 있습니다.
                              </li>
                           </ul>
                        </div>
                     </div>
                  </motion.article>
               </ContainerV1>
            </motion.div>
         </section>
         <TextSlide txtArr={slideTxt} className={styles.privacy_line} />
      </>
   )
}