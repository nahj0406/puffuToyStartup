import clsx from 'clsx'
import styles from './Section06.module.css'
import ContainerV1 from '@/component/ContainerV1.tsx/ContainerV1'
import { FormBox } from './client'

export default function Section06() {


   return (
      <section className={styles.sec6} id='section5'>
         <div className={styles.title_box}>
            <h2 className="paperLogy">창업문의</h2>
         </div>
         <FormBox /> 
      </section>
   )
}