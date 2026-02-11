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
