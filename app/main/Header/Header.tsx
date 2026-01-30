import ContainerV1 from '@/component/ContainerV1.tsx/ContainerV1'
import styles from './Header.module.css'
import Link from 'next/link'
import siteInfo from 'shared/utils/siteInfo'


// 앵커 연결해야 함
// 반응형 처리
// hover 애니메이션


export default function Header() {
   return (
      <header className={styles.header}>
         <ContainerV1 className={styles.wrapper}>
            <div className={styles.logo}>
               <Link href={'/'}><img src="/img/logo.png" alt="로고" /></Link>
            </div>
   
            <nav className={styles.outer}>
               <ul>
                  <li>사업 소개</li>
                  <li>창업 경쟁력</li>
                  <li>창업 패키지</li>
                  <li>창업 절차</li>
                  <li>창업 문의</li>
               </ul>
            </nav>

            <div className={styles.tel_box}>
               <strong className={'paperLogy'}>전화문의</strong>
               <Link className='poppins' href={`tel: ${siteInfo.csCenter.tel}`}>
                  {siteInfo.csCenter.tel}
               </Link>
            </div>
         </ContainerV1>
      </header>
   )
}