'use client'

import clsx from 'clsx'
import styles from './Section03.module.css'
import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; 

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export function SlideBox() {
   const slides = [
    '/img/img01.png',
    '/img/img02.png',
    '/img/img03.jpg',
    '/img/img04.jpg',
    '/img/img05.png'
  ]

//   const prevRef = useRef(null);
//   const nextRef = useRef(null);

  const [swiperInstance, setSwiperInstance] = useState(null);

//   useEffect(() => {
//     if (swiperInstance && prevRef.current && nextRef.current) {
//       // Swiper 인스턴스의 네비게이션 요소를 명시적으로 업데이트
//       swiperInstance.params.navigation.prevEl = prevRef.current;
//       swiperInstance.params.navigation.nextEl = nextRef.current;
      
//       // 네비게이션을 업데이트(초기화)합니다.
//       swiperInstance.navigation.init(); 
//       swiperInstance.navigation.update();
//     }
//   }, [swiperInstance]); // swiperInstance가 설정되면 실행

   return (
      <div className={styles.tab_box}>
         <div className={styles.tab_title}>
            <h5>교육환경보호구역 · 제한사항 체크리스트</h5>
            
            {/* 네비게이션 말고 페이지네이션 쓰기 */}
            <ul className='swiper-navigation'>
               <li className='prevBtn' >불가능 구역</li>
               <li className='nextBtn' >가능 구역</li>
               <li className='nextBtn' >확인 필요</li>
            </ul>
         </div>

         <div className="slide_box">
            <Swiper
             slidesPerView={'auto'}
             centeredSlides={true}
             spaceBetween={90}
             loop={true}
            //  onSwiper={setSwiperInstance}
             observer={true} 
             observeParents={true}
             pagination={{
               clickable: true,
             }}
             modules={[Autoplay, Pagination, Navigation]}
             autoplay={{
               delay: 4000,
               // allowTouchMove: false,
               disableOnInteraction: false,
             }}
             className="mySwiper"
            //  navigation={{
            //    prevEl: prevRef.current,
            //    nextEl: nextRef.current
            //  }}
           >
             { // 슬라이드 카드 내용은 컴포넌트로 할지 직접 쓸지 정하기
               slides.map((item, i)=> {
                 return (
                   <SwiperSlide key={i}>
                     <img src={item} alt="number" />
                   </SwiperSlide>
                 )
               })
             }
           </Swiper>
         </div>
      </div>
   )
}