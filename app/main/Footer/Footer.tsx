import ContainerV1 from '@/component/ContainerV1.tsx/ContainerV1'
import styles from './Footer.module.css'
import Link from 'next/link'
import siteInfo from 'shared/utils/siteInfo'


// 앵커 연결해야 함
// 반응형 처리
// hover 애니메이션


export default function Footer() {
   return (
      <footer className={styles.footer}>
         <ContainerV1 className={styles.wrapper}>
            <div className={styles.content_box}>
               <ul className={styles.content_item}>
                  <li><b>상호</b> {siteInfo.copyRight.company}</li>
                  <li><b>대표자</b> {siteInfo.copyRight.ceo}</li>
                  <li><b>사업자등록번호</b> {siteInfo.copyRight.bs_number}</li>
                  <li><b>주소</b> {siteInfo.copyRight.address}</li>
                  <li><b>가맹문의</b> {siteInfo.copyRight.tel_number}</li>
                  <li><b>이메일</b> {siteInfo.copyRight.email}</li>
               </ul>

               <b className={styles.copy_item}>{siteInfo.copyRight.copyright}</b>
            </div>

            <div className={styles.tel_box}>
               <strong className={'paperLogy'}>가맹문의</strong>
               <Link className='poppins' href={`tel: ${siteInfo.copyRight.tel_number}`}>
                  {siteInfo.copyRight.tel_number}
               </Link>
            </div>
         </ContainerV1>
      </footer>
   )
}