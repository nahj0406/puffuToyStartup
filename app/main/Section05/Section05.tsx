import clsx from 'clsx'
import styles from './Section05.module.css'
import ContainerV1 from '@/component/ContainerV1.tsx/ContainerV1'
import TextSlide from '@/component/TextSlide.tsx/TextSlide';

export default function Section05() {

   interface stepArray {
      img: string;
      content: string;
   };
   const stepArr = [ // 매장 오픈 절차
      {
         img: '/img/sec5/sec5_icon01.png',
         content: '창업상담'
      },
      {
         img: '/img/sec5/sec5_icon02.png',
         content: '입지 조건 확인'
      },
      {
         img: '/img/sec5/sec5_icon03.png',
         content: '현장 체크'
      },
      {
         img: '/img/sec5/sec5_icon04.png',
         content: '설계/ 인테리어 공사'
      },
      {
         img: '/img/sec5/sec5_icon05.png',
         content: '매장 기계 설치'
      },
      {
         img: '/img/sec5/sec5_icon06.png',
         content: '매장 오픈'
      },
   ]

   return (
      <>
         <TextSlide />
         <section className={styles.sec5} id={'section4'}>
            <ContainerV1>
               <div className={styles.title_box}>
                  <div className='normal_title_header'>
                     <span className='paperLogy title_deco_circle'>본사가 함께 돕는</span>
                     <h2 className='paperLogy'>창업절차 안내</h2>
                  </div>
               </div>
            </ContainerV1>
   
            <ContainerV1 className={clsx(styles.wrapper, styles.wrapper_01)}>
               <div className={styles.itemBox}>
                  {
                     stepArr.map((item: stepArray, i: number)=> {
                        return (
                           <article className={styles.item} key={`item_${i}`}>
                              <span className={clsx(styles.step_txt, 'poppins')}>
                                 {`step 0${i+1}`}
                              </span>
   
                              <figure className={styles.img_box}>
                                 <img src={item.img} alt="sec5_아이콘" className={styles.img} />
      
                                 <h5 className='paperLogy'>{item.content}</h5>
                              </figure>
                           </article>
                        )
                     })
                  }
               </div>
   
               <p className={styles.txt1}>
                  예상 기간은 평균 1개월이며 <br />
                  자판기 수급에 따라 대기 시간이 존재할 수 있습니다.
               </p>
            </ContainerV1>
   
            <ContainerV1 className={clsx(styles.wrapper, styles.wrapper_02)}>
               <div className={styles.title_box}>
                  <div className='normal_title_header'>
                     <span className='paperLogy title_deco_circle'>오픈 이후까지 책임지는</span>
                     <h2 className='paperLogy'>통합 운영 지원 시스템</h2>
                  </div>
   
                  <p className='paperLogy'>
                     푸푸토이는 창업 이후에 운영자가 혼자 판단해야 하는 상황을 <br />
                     <span className='title_deco'>최소화할 수 있도록</span> 운영 난이도를 낮춘 시스템과 <br />
                     지원 구조를 함께 제공합니다.
                  </p>
               </div>
   
               <div className={styles.itemBox}>
                  <article className={styles.item}>
                     <span className={clsx(styles.point_txt, 'poppins')}>
                        point 01
                     </span>

                     <figure className={styles.img_box}>
                        <div className={styles.img}>
                           <img src={'/img/sec5/sec5_point_icon01.png'} alt="sec5_아이콘" className={styles.default} />
                           <img src={'/img/sec5/sec5_point_icon01_hover.png'} alt="sec5_아이콘" className={styles.hover} />
                        </div>
      
                        <div className={styles.txt_box}>
                           <h5>자동발주 기반 재고 관리</h5>
                           <p>
                              재고 부족 시 자동 발주가 이루어져 품절 걱정 <br />
                              없이 안정적인 상품 운영이 가능합니다.
                           </p>
                        </div>
                     </figure>
                  </article>
   
                  <article className={styles.item}>
                     <span className={clsx(styles.point_txt, 'poppins')}>
                        point 02
                     </span>

                     <figure className={styles.img_box}>
                        <div className={styles.img}>
                           <img src={'/img/sec5/sec5_point_icon02.png'} alt="sec5_아이콘" className={styles.default} />
                           <img src={'/img/sec5/sec5_point_icon02_hover.png'} alt="sec5_아이콘" className={styles.hover} />
                        </div>
      
                        <div className={styles.txt_box}>
                           <h5>24시간 본사 CS 관제 지원</h5>
                           <p>
                              매장 내 고객 요청 및 이슈를 본사가 24시간 <br />
                              직접 대응해 무인 환경에서도 신뢰도 <br />
                              높은 고객 서비스를 제공합니다.
                           </p>
                        </div>
                     </figure>
                  </article>
   
                  <article className={styles.item}>
                     <span className={clsx(styles.point_txt, 'poppins')}>
                        point 03
                     </span>
   
                     <figure className={styles.img_box}>
                        <div className={styles.img}>
                           <img src={'/img/sec5/sec5_point_icon03.png'} alt="sec5_아이콘" className={styles.default} />
                           <img src={'/img/sec5/sec5_point_icon03_hover.png'} alt="sec5_아이콘" className={styles.hover} />
                        </div>
      
                        <div className={styles.txt_box}>
                           <h5>키오스크 상품·서비스 업데이트</h5>
                           <p>
                              신상품 추가 및 콘텐츠 업데이트를 키오스크에 <br />
                              즉시 반영해 항상 최신 상품과 서비스를 <br />
                              매장에서 제공할 수 있습니다.
                           </p>
                        </div>
                     </figure>
                  </article>
               </div>
            </ContainerV1>
   
         </section>
         <TextSlide />
      </>
   )
}