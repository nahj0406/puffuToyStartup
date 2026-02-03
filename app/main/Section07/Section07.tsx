import clsx from 'clsx'
import styles from './Section07.module.css'
import ContainerV1 from '@/component/ContainerV1.tsx/ContainerV1'
import { Caculator } from './client'

export default function Section07() {

   return (
      <section className={styles.sec6} id='section5'>
         <div className={styles.title_box}>
            <h2 className="paperLogy">창업문의</h2>
         </div>
         <ContainerV1>
            <Caculator />
         </ContainerV1>
      </section>
   )
}