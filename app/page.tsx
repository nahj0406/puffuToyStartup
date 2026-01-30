import { Caculator, FormBox } from './client'


export default function Home() {


  return (
    <div>
      <main>
        <div>
          <h2>회수기간 계산기</h2>

          <Caculator />
          <FormBox />
        </div>
      </main>
    </div>
  );
}
