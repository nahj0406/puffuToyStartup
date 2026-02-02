import clsx from 'clsx'
import styles from './Section04.module.css'
import ContainerV1 from '@/component/ContainerV1.tsx/ContainerV1'

export default function Section04() {
   return (
      <section className={styles.sec4} id='section4'>
         <div className={styles.title_header}>
            <div className="title">
               <span>차별화된 브랜드 방향성</span>
               <h2>차별화된 브랜드 방향성</h2>
            </div>
         </div>

         <ContainerV1 className={clsx(styles.wrapper, styles.step1)}>
            <article className={styles.titleBox}>
               <h2>
                  <span className='title_deco2'>프라이빗한 동선 설계</span> + 온/오프라인 픽업
               </h2>

               <div className={styles.txt_box}>
                  <p>
                     푸푸토이는 프라이버시 중심의 동선 설계로 타인의 시선과 불필요한 접촉을 <br />
                     최소화해 매장 안에서 머무는 모든 시간은 타인의 시선이 아닌 본인의 <br />
                     선택에만 집중할 수 있도록 구성되어 있습니다. 
                  </p>
   
                  <p>
                     또한 자체 쇼핑몰 운영으로 온라인 유저도 가까운 매장을 방문하여 <br />
                     픽업 서비스로 상품을 받아볼 수 있습니다.
                  </p>
               </div>
            </article>

            <div className={styles.itemBox}>
               <article className={styles.item}>
                  <img src="" alt="" />
                  <div className="txt_box">
                     <h5>1 성인인증 후 매장 입장</h5>
                     <p>
                        안전하게 성인인증을 거쳐야만 입장할 수 있어 <br />
                        미성년자 출입 문제를 원천 차단합니다
                     </p>
                  </div>
               </article>

               <article className={styles.item}>
                  <img src="" alt="" />
                  <div className="txt_box">
                     <h5>2 프라이빗 라운지에서 편하게 탐색</h5>
                     <p>
                        입구를 지나면 나오는 준비된 프라이빗 라운지에서 <br />
                        원하시는 상품을 편하게 둘러보실 수 있습니다.
                     </p>
                  </div>
               </article>

               <article className={styles.item}>
                  <img src="" alt="" />
                  <div className="txt_box">
                     <h5>3 자판기 픽업/결제</h5>
                     <p>
                        프라이빗 라운지에서 상품 선택 후 <br />
                        결제룸으로 이동하여 상품을 수령하면 끝.
                     </p>
                  </div>
               </article>

               <article className={styles.item}>
                  <img src="" alt="" />
                  <div className="txt_box">
                     <h5>4 온라인 주문 후 오프라인 픽업 가능</h5>
                     <p>
                        온라인으로 주문한 유저는 가까운 매장을 찾아 <br />
                        곧바로 결제룸에서 픽업 상품을 수령 받을 수 있습니다.
                     </p>
                  </div>
               </article>
            </div>
         </ContainerV1>
      </section>
   )
}