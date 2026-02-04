import clsx from 'clsx'
import styles from './Section06.module.css'
import ContainerV1 from '@/component/ContainerV1.tsx/ContainerV1'
import { FormBox } from './client'
import * as motion from "motion/react-client"

export default function Section06() {


   return (
      <section className={styles.sec6} id='section5'>
         <div className={styles.title_box}>
            <motion.h2 
               className="paperLogy"
               initial='offscreen'
               whileInView='onscreen'
               viewport={{amount: 0.5, once: true}}
               variants={{
                  offscreen: { y: -10, opacity: 0,},
                  onscreen: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.3,},},
               }}
            >
               창업문의
            </motion.h2>
         </div>
         <ContainerV1>
            <FormBox />
         </ContainerV1>
      </section>
   )
}