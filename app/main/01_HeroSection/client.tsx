
'use client'

import styles from './HeroSection.module.css'
import * as motion from "motion/react-client"
import type { Variants } from "motion/react"
import clsx from 'clsx'

const barKeywordVariants : Variants = {
   offscreen: ({xValue} : {xValue: number | string})=> ({ 
      x: xValue, opacity: 0,
   }),
   onscreen: ({delay} : {delay: number})=> ({ 
      x: 0, opacity: 1, 
      transition: { duration: 0.8, delay: delay, ease: "easeInOut",}
   }),
}

export function KeywordBox () {
   return (
      <div className={styles.keyword_box}>
         <figure className={clsx(styles.bar_keyword, styles.left)}>
            <motion.img 
               variants={barKeywordVariants}
               custom={{xValue: '50%', delay: 3}}
               src="/img/hero/bar_keyword_01.png" alt="초보자도 쉽게 운영 가능" className={clsx(styles.bar_img, styles.bar_01)}
            />

            <motion.img 
               variants={barKeywordVariants}
               custom={{xValue: '50%', delay: 3.1}}
               src="/img/hero/bar_keyword_02.png" alt="인건비 걱정 제로" className={clsx(styles.bar_img, styles.bar_02)}
            />

            <motion.img 
               variants={barKeywordVariants}
               custom={{xValue: '50%', delay: 3.2}}
               src="/img/hero/bar_keyword_03.png" alt="자동 상품 업데이트" className={clsx(styles.bar_img, styles.bar_03)}
            />
         </figure>

         <figure className={clsx(styles.bar_keyword, styles.right)}>
            <motion.img 
               variants={barKeywordVariants}
               custom={{xValue: '-50%', delay: 3}}
               src="/img/hero/bar_keyword_04.png" alt="매장 무료 상권 분석" className={clsx(styles.bar_img, styles.bar_04)}
            />

            <motion.img 
               variants={barKeywordVariants}
               custom={{xValue: '-50%', delay: 3.1}}
               src="/img/hero/bar_keyword_05.png" alt="오픈 이후 본사 밀착 케어" className={clsx(styles.bar_img, styles.bar_05)}
            />

            <motion.img 
               variants={barKeywordVariants}
               custom={{xValue: '-50%', delay: 3.2}}
               src="/img/hero/bar_keyword_06.png" alt="자동 발주 시스템" className={clsx(styles.bar_img, styles.bar_06)}
            />
         </figure>
      </div>
   )
}