import clsx from 'clsx'
import styles from './Section02.module.css'
import ContainerV1 from '@/component/ContainerV1.tsx/ContainerV1'

export default function Section02() {
   return (
      <section className={styles.sec2}>
         <img src="/img/sec2/rotate_circle.png" alt="로고 써클" className={clsx(styles.logo_circle, styles.circle01)} />
         <img src="/img/sec2/rotate_circle.png" alt="로고 써클" className={clsx(styles.logo_circle, styles.circle02)} />

         <ContainerV1 className={styles.wrapper}>
            <div className={styles.title_box}>
               <img src="/img/sec2/title_bar.png" alt="제목 데코 막대" className={styles.title_stick} />
               <div className="title">
                  <strong className='paperlogy'>많은 업종중에</strong>
                  <h2 className='paperlogy'>
                     왜 <span className='title_deco'>무인 성인용품</span> 인가?
                  </h2>
               </div>
            </div>

            <div className={clsx(styles.itemBox, styles.item01)}>
               <img src="/img/sec2/item1_img.png" alt="아이템1 이미지" className={styles.img} />

               <article className={styles.txt_box}>
                  <h3 className='paperlogy'>
                     <span className='title_deco'>최소화된 인건비</span>와 <br />
                     단순한 <span className='title_deco'>운영 시스템</span>
                  </h3>

                  <div className="unit">
                     <div className="txt1">
                        <img src="/img/sec2/check_icon.png" alt="체크 아이콘" className={styles.check_i} />
                        <p>
                           무인으로 운영되기 때문에 인건비가 거의 나가지 않고 <br />
                           직원 채용과 근무 관리 문제에서도 자유롭습니다.
                        </p>
                     </div>

                     <div className="txt1">
                        <img src="/img/sec2/check_icon.png" alt="체크 아이콘" className={styles.check_i} />
                        <p>
                           유인매장과 달리 직원이 상주할 필요가 없고, 자동화된 결제 <br />
                           시스템으로 인해 응대 스트레스가 없습니다.
                        </p>
                     </div>
                  </div>
               </article>
            </div>

            <div className={clsx(styles.itemBox, styles.item02)}>
               <img src="/img/sec2/item2_img.png" alt="아이템2 이미지" className={styles.img} />

               <article className={styles.txt_box}>
                  <h3 className='paperlogy'>
                     <span className='title_deco'>프라이버시</span>를 만족하는 환경과 <br />
                     목적성/즉시 <span className='title_deco'>구매성 충족</span>
                  </h3>

                  <div className="unit">
                     <div className="txt1">
                        <img src="/img/sec2/check_icon.png" alt="체크 아이콘" className={styles.check_i} />
                        <p>
                           대면 없이 편안한 구매환경으로 프라이버시가 중요한 <br />
                           성인용품의 특성과 최적의 시너지를 냅니다.
                        </p>
                     </div>

                     <div className="txt1">
                        <img src="/img/sec2/check_icon.png" alt="체크 아이콘" className={styles.check_i} />
                        <p>
                           성인용품매장을 찾는 고객은 대부분 명확한 목적을 가지고 <br />
                           매장에 진입하며, 구경 → 이탈보다 구매 전환율이 높습니다.
                        </p>
                     </div>

                     <div className="txt1">
                        <img src="/img/sec2/check_icon.png" alt="체크 아이콘" className={styles.check_i} />
                        <p>
                           무인 매장은 설명이나 대면 없이 고객이 원하는 상품을 빠르게 <br />
                           선택하고 즉시 구매 · 즉기 수령할 수 있는 환경을 제공합니다.
                        </p>
                     </div>
                  </div>
               </article>
            </div>
         </ContainerV1>
      </section>
   )
}