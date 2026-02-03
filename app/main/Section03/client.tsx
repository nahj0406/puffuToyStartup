'use client'

import clsx from 'clsx'
import styles from './Section03.module.css'
import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

export function SlideBox() {

  const tabNames = ['불가능 구역', '가능 구역', '확인 필요'];

  const paginationOptions = {
    el: '.custom-pagination',
    clickable: true,
    renderBullet: function (index: number, className:string) {
      return `<li class="${clsx(className, styles.btn)}">${tabNames[index]}</li>`;
    }
  }

   return (
      <div className={styles.slide_box}>
         <div className={styles.tab_title}>
            <h5>교육환경보호구역 · 제한사항 체크리스트</h5>
            
            {/* 네비게이션 말고 페이지네이션 쓰기 */}
            <ul className={clsx('custom-pagination', styles.tab_box)}></ul>
         </div>

         <div className={styles.card_wrapper}>
            <Swiper
             slidesPerView={1}
             spaceBetween={30}
             loop={true}
            //  observer={true} 
            //  observeParents={true}
             pagination={paginationOptions}
             modules={[Autoplay, Pagination]}
             autoplay={{
               delay: 7000,
               disableOnInteraction: false,
             }}
             className={styles.mySwiper}
           >
              <SwiperSlide className={styles.card_box}>
                <article className={styles.card}>
                  <h4 className='paperLogy'>교육환경보호구역</h4>
                  <ul className={styles.list}>
                    <li>
                      <p>절대보호구역(학교 출입문 기준 50m 이내)</p>
                    </li>
  
                    <li>
                      <p>상대보호구역(학교 경계 기준 200m 이내)</p>
                    </li>
                  </ul>
                </article>

                <article className={styles.card}>
                  <h4 className='paperLogy'>주거계열 용도지역</h4>
                  <ul className={styles.list}>
                    <li>
                      <p>제1종·제2종 전용주거지역</p>
                    </li>
  
                    <li>
                      <p>제1종·제2종 일반주거지역</p>
                    </li>

                    <li>
                      <p>준주거지역</p>
                    </li>
                  </ul>
                </article>
              </SwiperSlide>

              <SwiperSlide className={clsx(styles.card_box, styles.type_02)}>
                <article className={styles.card}>
                  <h4 className='paperLogy'>교육환경보호구역</h4>
                  <ul className={styles.list}>
                    <li>
                      <p>EEIS 기준 보호구역 밖</p>
                    </li>
                  </ul>
                </article>
              </SwiperSlide>

              <SwiperSlide className={styles.card_box}>
                <article className={styles.card}>
                  <h4 className='paperLogy'>일반상업지역 / 근린상업지역</h4>
                  <ul className={styles.list}>
                    <li>
                      <p>지역별로 허용·불허가 극명하게 갈림</p>
                    </li>
                  </ul>
                </article>

                <article className={styles.card}>
                  <h4 className='paperLogy'>건축물 조건에 따른 제한</h4>
                  <ul className={styles.list}>
                    <li>
                      <p>공동주택 하부 상가</p>
                    </li>
  
                    <li>
                      <p>주거와 혼합된 복합건물</p>
                    </li>

                    <li>
                      <p>동일 건물 내 학원·독서실 존재</p>
                    </li>

                    <li>
                      <p>건축법 + 조례 + 실제 입점 업종 모두 확인 필요</p>
                    </li>
                  </ul>
                </article>
              </SwiperSlide>
           </Swiper>
         </div>
      </div>
   )
}