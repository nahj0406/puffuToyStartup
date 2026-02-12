'use client'

import clsx from 'clsx'
import styles from './LocationSection.module.scss'
import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import * as motion from "motion/react-client"
import type { Variants } from "motion/react"
import NiceModal from "@ebay/nice-modal-react";
import MiniFormModal from "@/component/modal/MiniFormModal/MiniFormModal";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import Link from 'next/link';




export function PointBox() {

  const [slideOn, setSlideOn] = useState(false);

  // pc에서 모바일로 전환될때 스와이퍼 ker값으로 바로 활성화 처리
  useEffect(() => { 
    const handleResize = () => {
      setSlideOn(window.innerWidth < 992);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // itemBox mobd animation 처리
  const mobSwiperBoxVariants : Variants = {
    offscreen: ()=> ({ 
        y: 50, opacity: 0,
    }),
    onscreen: ()=> ({
        y: 0, opacity: 1, 
        transition: { duration: 0.5, delay: 0.5,},
    }),
  }

  // itemBox item animation 처리
  const itemVariants : Variants = {
    offscreen: ()=> ({ 
        y: 50, opacity: 0,
    }),
    onscreen: ({delay} : {delay: number})=> ({
        y: 0, opacity: 1, 
        transition: { duration: 0.5, delay: delay,},
    }),
  }

  return (
    <motion.div 
      className={styles.swiper_box}
      key={slideOn ? "motion-on" : "motion-off"}
      initial={slideOn ? 'offscreen' : undefined}
      whileInView={slideOn ? 'onscreen' : undefined}
      viewport={slideOn ? {amount: 0.3, once: true} : undefined}
      variants={slideOn ? mobSwiperBoxVariants : undefined }
    >
      <Swiper 
        key={slideOn ? "mobile" : "desktop"}
        className={styles.itemBox}
        slidesPerView={2}
        spaceBetween={0}
        modules={[Autoplay]}
        // observer={true} 
        // observeParents={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          100: {
            slidesPerView: 1.15,
            spaceBetween: 30,
          },
          480: {
            slidesPerView: 1.8,
            spaceBetween: 30,
          },
          680: {
            slidesPerView: 2.2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 30,
          },
          992: {
            spaceBetween: 0,
            enabled: false,   // 992 이상에서는 swiper 비활성화
          },
        }}
      >
        <SwiperSlide className={styles.item_slide}>
          <motion.figure 
            key={slideOn ? "motion-off" : "motion-on"}
            className={styles.item}
            initial={slideOn ? undefined : 'offscreen'}
            whileInView={slideOn ? undefined : 'onscreen'}
            viewport={slideOn ? undefined : {amount: 0.3, once: true}}
            variants={slideOn ? undefined : itemVariants}
            custom={{delay: 0.3}}
          >
              <span className={clsx(styles.title_point, 'poppins')}>point 1</span>
    
              <div className={styles.unit}>
                <img src="/img/location/item1_img01.png" alt="상가 이미지1" className={styles.img} />
    
                <div className={styles.txt_box}>
                    <h5 className='paperLogy'><span>일정 반경 내</span> 수요만 확보되면 운영 가능</h5>
    
                    <p>
                      성인용품은 제품 특성상 <b>타업종 대비 높은 단가</b>로 <br />
                      적은 판매량으로도 임대료와 운영비 충당이 <br />
                      비교적 수월합니다.
                    </p>
                </div>
              </div>
          </motion.figure>
        </SwiperSlide>
  
        <SwiperSlide className={styles.item_slide}>
          <motion.figure 
            key={slideOn ? "motion-off" : "motion-on"}
            className={styles.item}
            initial={slideOn ? undefined : 'offscreen'}
            whileInView={slideOn ? undefined : 'onscreen'}
            viewport={slideOn ? undefined : {amount: 0.3, once: true}}
            variants={slideOn ? undefined : itemVariants}
            custom={{delay: 0.5}}
          >
              <span className={clsx(styles.title_point, 'poppins')}>point 2</span>
    
              <div className={styles.unit}>
                <img src="/img/location/item1_img02.png" alt="상가 이미지2" className={styles.img} />
    
                <div className={styles.txt_box}>
                    <h5 className='paperLogy'><span>메인 상권</span>이 아니라도 운영 가능</h5>
                    
                    <p>
                      준비된 동선과 간판 + 안내 설계로 고객들의 이목을 <br />
                      끌어 <b>직관적으로 매장 위치</b>를 알릴 수 있습니다.
                    </p>
                </div>
              </div>
          </motion.figure>
        </SwiperSlide>
  
        <SwiperSlide className={styles.item_slide}>
          <motion.figure
            key={slideOn ? "motion-off" : "motion-on"}
            className={styles.item}
            initial={slideOn ? undefined : 'offscreen'}
            whileInView={slideOn ? undefined : 'onscreen'}
            viewport={slideOn ? undefined : {amount: 0.3, once: true}}
            variants={slideOn ? undefined : itemVariants}
            custom={{delay: 0.7}}
          >
              <span className={clsx(styles.title_point, 'poppins')}>point 3</span>
    
              <div className={styles.unit}>
                <img src="/img/location/item1_img03.png" alt="상가 이미지2" className={styles.img} />
    
                <div className={styles.txt_box}>
                    <h5 className='paperLogy'>소비 목적이 분명한 <span>목적형 구매</span></h5>
                    
                    <p>
                      매장 방문객의 대다수는 이미 구매 의사를 결정하고 <br />
                      방문하기 때문에 <span>구매 전환율</span>이 타업종 대비 높습니다.
                    </p>
                </div>
              </div>
          </motion.figure>
        </SwiperSlide>
  
        <SwiperSlide className={styles.item_slide}>
          <motion.figure 
            key={slideOn ? "motion-off" : "motion-on"}
            className={styles.item}
            initial={slideOn ? undefined : 'offscreen'}
            whileInView={slideOn ? undefined : 'onscreen'}
            viewport={slideOn ? undefined : {amount: 0.3, once: true}}
            variants={slideOn ? undefined : itemVariants}
            custom={{delay: 0.9}}
          >
              <span className={clsx(styles.title_point, 'poppins')}>point 4</span>
    
              <div className={styles.unit}>
                <img src="/img/location/item1_img04.png" alt="상가 이미지2" className={styles.img} />
    
                <div className={styles.txt_box}>
                    <h5 className='paperLogy'><span>야간 · 심야</span> 시간대에도 매출 발생</h5>
                    
                    <p>
                      야간과 심야 시간에는 <span>유흥가나 일반 데이트 커플</span> 등의 <br />
                      수요가 증가하는 시간대로 24시간 상시 운영중인 <br />
                      매장의 특성으로 <span>야간 매출</span>을 충분히 기대할 수 있습니다.
                    </p>
                </div>
              </div>
          </motion.figure>
        </SwiperSlide>
  
        <SwiperSlide className={styles.item_slide}>
          <motion.figure 
            key={slideOn ? "motion-off" : "motion-on"}
            className={styles.item}
            initial={slideOn ? undefined : 'offscreen'}
            whileInView={slideOn ? undefined : 'onscreen'}
            viewport={slideOn ? undefined : {amount: 0.3, once: true}}
            variants={slideOn ? undefined : itemVariants}
            custom={{delay: 1.1}}
          >
              <span className={clsx(styles.title_point, 'poppins')}>point 5</span>
    
              <div className={styles.unit}>
                <img src="/img/location/item1_img05.png" alt="상가 이미지2" className={styles.img} />
    
                <div className={styles.txt_box}>
                    <h5 className='paperLogy'><span>자체 쇼핑몰 운영</span>으로 온라인 유저 유입</h5>
                    
                    <p>
                      푸푸토이 온라인 쇼핑몰의 <span>자체 픽업 시스템</span>을 <br />
                      통해 인근 거주 온라인 고객의 구매까지 <br />
                      <span>오프라인 매출</span>로 연결할 수 있습니다.
                    </p>
                </div>
              </div>
          </motion.figure>
        </SwiperSlide>
      </Swiper>
    </motion.div>
  )
}

export function RegulationBox() {

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
            <h5 onClick={()=> NiceModal.hide(MiniFormModal)}>교육환경보호구역 · 제한사항 체크리스트</h5>
            
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
               delay: 5000,
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

export function ButtonBox() {
  // const FormAnchor = (id: string) => {
  //   const el = document.getElementById(id);
  //     if (!el) return;

  //     // :root에 설정된 --header-h 값 가져옴.
  //     const headerH = parseFloat(
  //        getComputedStyle(document.documentElement)
  //           .getPropertyValue('--header-h')
  //     ) || 0;
  //     // 사파리에서도 적용 잘 되는데 만약 버벅이면 getComputedStyle 문제임.

  //     const y =
  //        el.getBoundingClientRect().top +
  //        window.scrollY - headerH;

  //     window.scrollTo({ top: y, behavior: 'smooth' });
  // };

  return (
    <motion.div 
      className={styles.btn_box}
      initial='offscreen'
      whileInView='onscreen'
      viewport={{amount: 0.2, once: true}}
      variants={{
         offscreen: { y: 30, opacity: 0,},
         onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.3,},},
      }}
    >
      <div className={clsx(styles.blue_btn)}>
        <Link href={'https://eeis.schoolkeepa.or.kr/gis/gis.do'} target='_blank'>
            내 입지조건 확인하기
        </Link>
      </div>

      <div onClick={()=> {NiceModal.show(MiniFormModal, {});}} className={clsx(styles.red_btn)}>
        내 입지조건 문의하기
      </div>
  </motion.div>
  )
}