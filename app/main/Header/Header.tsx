import ContainerV1 from '@/component/ContainerV1.tsx/ContainerV1'
import styles from './Header.module.css'
import Link from 'next/link'
import siteInfo from 'shared/utils/siteInfo'
import { OuterMenu } from './client'


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

            {/* 앵커 메뉴 및 모바일 버튼 */}
            <OuterMenu />

            <div className={styles.tel_box}>
               <strong className={'paperLogy'}>전화문의</strong>
               <Link className='poppins' href={`tel: ${siteInfo.copyRight.tel_number}`}>
                  {siteInfo.copyRight.tel_number}
               </Link>
            </div>
         </ContainerV1>
      </header>
   )
}