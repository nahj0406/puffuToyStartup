// section
import Section01 from '@/main/Section01/Section01';
import Section02 from '@/main/Section02/Section02';
import Section03 from '@/main/Section03/Section03';
import Section04 from '@/main/Section04/Section04';
import Section05 from '@/main/Section05/Section05';
import Section06 from '@/main/Section06/Section06';
import Section07 from '@/main/Section07/Section07';
import Header from '@/main/Header/Header';
import Footer from '@/main/Footer/Footer';
import BottomForm from '@/component/BottomForm/BottomForm';


export default function Home() {

  return (
    <main>
      <Header/>
      <Section01/>
      <Section02/>
      <Section03/>
      <Section04/>
      <Section07/>
      <Section05/>
      <Section06/>
      <Footer/>
      <BottomForm />
    </main>
  );
}
