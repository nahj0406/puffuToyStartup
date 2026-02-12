import clsx from 'clsx'
import styles from './CalcSection.module.scss'
import ContainerV1 from '@/component/ContainerV1.tsx/ContainerV1'
import { BadgeBox, Caculator } from './client'
import * as motion from "motion/react-client"
import type { Variants } from "motion/react"


export default function CalcSection() {

   const LineDecoAni : Variants = {
      offscreen: { height: 0, opacity: 0 },
      onscreen: { 
         height: '100%',
         opacity: 1,
         transition: {duration: 0.5, delay: 0.5 }
      },
   }

   return (
      <section className={styles.calcSection} id='calcSection'>
         <ContainerV1 className={styles.wrapper}>
            <motion.div 
               className={styles.title_box}
               initial='offscreen'
               whileInView='onscreen'
               viewport={{amount: 0.5, once: true}}
            >
               <div className='normal_title_header'>
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
                        <span className='title_deco'>자동화 시스템</span>이 <br className={styles.mob_br} /> 만드는 <br />
                        24시간 <br className={styles.mob_br} /> <span className='title_deco gold'>지속 가능한 수익</span>
                     </motion.h2>
                  </div>
               </div>
            </motion.div>

            <BadgeBox />

            <Caculator />
         </ContainerV1>
      </section>
   )
}