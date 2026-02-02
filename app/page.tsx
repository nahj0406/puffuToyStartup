import { Caculator, FormBox } from './client'



// section
import Section01 from '@/main/Section01/Section01';
import Section02 from '@/main/Section02/Section02';
import Section03 from '@/main/Section03/Section03';
import Section04 from '@/main/Section04/Section04';
import Header from '@/main/Header/Header';
import Footer from '@/main/Footer/Footer';


export default function Home() {


  return (
    <main>
      <Header/>
      <Section01/>
      <Section02/>
      <Section03/>
      <Section04/>
      <Footer/>
      {/* <Caculator />
      <FormBox /> */}
    </main>
  );
}
