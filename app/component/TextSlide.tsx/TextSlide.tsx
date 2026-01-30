import ContainerV1 from '@/component/ContainerV1.tsx/ContainerV1'
import styles from './TextSlide.module.css.module.css'
import Link from 'next/link'
import siteInfo from 'shared/utils/siteInfo'


// swiper 불러오기
// 반응형 처리
// 내용 props 받을지 생각해보기


export default function TextSlide() {
   return (
      <div>
         <p>
            프라이빗 동선
            다양한 상품
            합리적 가격
            안전한 성인인증
            온/오프라인 픽업
            무재고(위탁)운영
         </p>
      </div>
   )
}