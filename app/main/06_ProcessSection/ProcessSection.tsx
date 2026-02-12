import clsx from 'clsx'
import styles from './ProcessSection.module.scss'
import ContainerV1 from '@/component/ContainerV1.tsx/ContainerV1'
import TextSlide from '@/component/TextSlide.tsx/TextSlide';
import * as motion from "motion/react-client"
import type { Variants } from "motion/react"
import isMobile from 'shared/utils/isMobile';

export default function ProcessSection() {

   interface stepArray {
      img: string;
      content: string;
   };

   const stepArr = [ // 매장 오픈 절차
      {
         img: '/img/process/procedure_icon01.png',
         content: '창업상담'
      },
      {
         img: '/img/process/procedure_icon02.png',
         content: '입지 조건 확인'
      },
      {
         img: '/img/process/procedure_icon03.png',
         content: '현장 체크'
      },
      {
         img: '/img/process/procedure_icon04.png',
         content: '설계/ 인테리어 공사'
      },
      {
         img: '/img/process/procedure_icon05.png',
         content: '매장 기계 설치'
      },
      {
         img: '/img/process/procedure_icon06.png',
         content: '매장 오픈'
      },
   ]

   const LineDecoAni : Variants = {
      offscreen: { height: 0, opacity: 0 },
      onscreen: { 
         height: '100%',
         opacity: 1,
         transition: {duration: 0.5, delay: 0.5 }
      },
   }

   return (
      <>
         <section className={styles.process} id={'process'}>
            <ContainerV1 className={clsx(styles.wrapper, styles.cost_area)}>
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
                     <div className={'line_deco_box'}>
                        <motion.span
                           initial='offscreen'
                           whileInView='onscreen'
                           viewport={{amount: 0.3, once: true}}
                           className={'line left'}
                           variants={LineDecoAni}
                        />
                        <motion.span 
                           initial='offscreen'
                           whileInView='onscreen'
                           viewport={{amount: 0.3, once: true}}
                           className={'line right'}
                           variants={LineDecoAni}
                        />

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
                        <h5 className='paperLogay'>1.5억 패키지</h5>
                        <span className='paperLogay'>(실내 추가 공사 비용 제외)</span>
                     </div>

                     <div className={styles.content}>
                        <div className={styles.unit}>
                           <img className={styles.icon_img} src="/img/process/cost_signboard.png" alt="패키지 아이콘" />
                           <span>외부간판</span>
                        </div>
      
                        <div className={styles.unit}>
                           <img className={styles.icon_img} src="/img/process/cost_outdoor_sign.png" alt="패키지 아이콘" />
                           <span>실내 외 사인물</span>
                        </div>
      
                        <div className={styles.unit}>
                           <img className={styles.icon_img} src="/img/process/cost_interior.png" alt="패키지 아이콘" />
                           <span>인테리어 포함</span>
                        </div>
      
                        <div className={clsx(styles.unit, styles.kiosk_group)}>
                           <div className={clsx(styles.kiosk)}>
                              <img className={styles.icon_img} src="/img/process/cost_kiosk.png" alt="패키지 아이콘" />
                              <span>자판기 12대</span>
                           </div>
      
                           <div className={styles.ca_icon}>
                              <img src="/img/process/cost_kiosk_category.png" alt="= 기호" />
                           </div>
      
                           <div className={clsx(styles.kisok_item)}>
      
                              <figure className={styles.item_unit}>
                                 <img src="/img/process/cost_kiosk_coil.png" alt="패키지 아이콘" />
                                 <span>스프링 4대</span>
                              </figure>
      
                              <figure className={styles.item_unit}>
                                 <img src="/img/process/cost_kiosk_cabinet.png" alt="패키지 아이콘" />
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
                           <p className={styles.txt2}>
                              ※ 자판기 수급 상황에 따라 <br />
                              대기 시간이 발생할 수 있습니다.
                           </p>
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
                              (프라이빗 라운지 + 키오스크 4대 <br />
                              + 자판기 동선)
                           </p>
                        </div>
                     </motion.article>
                  </div>
               </div>
            </ContainerV1>
   
            <ContainerV1 className={clsx(styles.wrapper, styles.procedure_area)}>
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
                        본사가 함께 돕는
                     </motion.span>

                     <div className={'line_deco_box'}>
                        <motion.span
                           initial='offscreen'
                           whileInView='onscreen'
                           viewport={{amount: 0.3, once: true}}
                           className={'line left'}
                           variants={LineDecoAni}
                        />
                        <motion.span 
                           initial='offscreen'
                           whileInView='onscreen'
                           viewport={{amount: 0.3, once: true}}
                           className={'line right'}
                           variants={LineDecoAni}
                        />

                        <motion.h2 
                           className='paperLogy'
                           variants={{
                              offscreen: { y: -10, opacity: 0,},
                              onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5,},},
                           }}
                        >
                           창업절차 안내
                        </motion.h2>
                     </div>
                  </div>
               </motion.div>

               <motion.div 
                  className={styles.itemBox}
                  initial='offscreen'
                  whileInView='onscreen'
                  viewport={{amount: isMobile ? 0.3 : 0.5, once: true}}
               >
                  {
                     stepArr.map((item: stepArray, i: number)=> {
                        return (
                           <motion.article 
                              className={styles.item} key={`item_${i}`}
                              variants={{
                                 offscreen: { y: -10, opacity: 0,},
                                 onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: (0.15 * i),},},
                              }}
                           >
                              <span className={clsx(styles.step_txt, 'poppins')}>
                                 {`step 0${i+1}`}
                              </span>
   
                              <figure className={styles.img_box}>
                                 <img src={item.img} alt="sec5_아이콘" className={styles.img} />
      
                                 <h5 className='paperLogy'>{item.content}</h5>
                              </figure>
                           </motion.article>
                        )
                     })
                  }
               </motion.div>
   
               <motion.p 
                  className={styles.txt1}
                  initial='offscreen'
                  whileInView='onscreen'
                  viewport={{amount: 0.5, once: true}}
                  variants={{
                     offscreen: { y: -10, opacity: 0,},
                     onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.3,},},
                  }}
               >
                  예상 기간은 평균 1개월이며 <br />
                  자판기 수급에 따라 대기 시간이 존재할 수 있습니다.
               </motion.p>
            </ContainerV1>
   
         </section>
         <TextSlide />
      </>
   )
}