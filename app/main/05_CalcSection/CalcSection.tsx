import clsx from 'clsx'
import styles from './CalcSection.module.scss'
import ContainerV1 from '@/component/ContainerV1.tsx/ContainerV1'
import { Caculator } from './client'
import * as motion from "motion/react-client"

export default function CalcSection() {

   return (
      <section className={styles.calcSection} id='calcSection'>
         <ContainerV1 className={styles.wrapper}>
            <Caculator />
         </ContainerV1>
      </section>
   )
}