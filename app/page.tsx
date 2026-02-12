// section
import HeroSection from '@/main/01_HeroSection/HeroSection';
import WhyUsSection from '@/main/02_WhyUsSection/WhyUsSection';
import PrivacySection from '@/main/03_PrivacySection/PrivacySection';
import LocationSection from './main/04_LocationSection/LocationSection';
import CalcSection from '@/main/05_CalcSection/CalcSection';
import ProcessSection from '@/main/06_ProcessSection/ProcessSection';
import ContactSection from '@/main/07_ContactSection/ContactSection';
import Header from '@/main/Header/Header';
import Footer from '@/main/Footer/Footer';
import BottomForm from '@/component/BottomForm/BottomForm';


// 나중에 푸푸토이 쇼핑몰 프로젝트 서브도메인으로 파서 병합된다면 scss 파일중에 global.scss랑 normalrize.scss 어떻게 할지 확인하기.

// scss 컴파일 상황 : next.js에서 자동 컴파일링 해줘서 npm i sass만 설치하면 끝.
// scss 파일 공통으로 들어가는 mixin 코드 : next.config.ts에 sassOption으로 css/mixins.scss 파일 설정 완료
// @include 할때 불러오는 코드 앞에 mixins 붙여주면 mixins.scss 코드 연결됨.


// font-size, css 변수 global 앨리먼트 스타일 속성은 전부 normalrize.scss에 작성
// font-size는 hero나 Calc 단락 정도 빼면 거의 normalrize에 있는 fontSize 따라감.


export default function Home() {

  return (
    <main>
      <Header/>
      <HeroSection/>
      <WhyUsSection/>
      <PrivacySection/>
      <LocationSection/>
      <CalcSection/>
      <ProcessSection/>
      <ContactSection/>
      <Footer/>
      <BottomForm />
    </main>
  );
}
