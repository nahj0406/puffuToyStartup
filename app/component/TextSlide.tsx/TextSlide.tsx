'use client'

import styles from './TextSlide.module.css'
import siteInfo from 'shared/utils/siteInfo'
import clsx from 'clsx';

import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";


// swiper 불러오기
// 반응형 처리
// 내용 props 받을지 생각해보기


export default function TextSlide() {
   const textArr = [
      '프라이빗 동선',
      '다양한 상품',
      '합리적 가격',
      '안전한 성인인증',
      '온/오프라인 픽업',
      '무재고(위탁)운영',
   ];

   const slides = [...textArr, ...textArr, ...textArr];

   
   return (
      <div className={styles.textSlide}>
         <Swiper
            className={clsx(styles.slideFrams)}
            loop={true}
            slidesPerView={'auto'}
            speed={7000}
            allowTouchMove={false}
            spaceBetween={30}
            modules={[Autoplay]}
            autoplay={{
               delay: 1,
               disableOnInteraction: false,
            }}
            >
            {slides.map((item: string, i: number) => {
               return (
                  <SwiperSlide
                     key={`text_${i}`}
                     className={clsx(styles.slideItem, `swiper_${i}`)}
                  >
                     <div className={styles.txt_box}>
                        <span className={clsx(styles.txt, 'paperLogy')}>{item}</span>
                        <span className={clsx(styles.dote, 'paperLogy')}>·</span>
                     </div>
                  </SwiperSlide>
               );
            })}
         </Swiper>
      </div>
   )
}