
import Section1 from './home/Section1';
import Section2 from './home/Section2';

import '../assets/scss/Home.scss';


export default function Home() {
  return (
    <div className="home">
      <section><Section1 /></section>
      <section><Section2 /></section>
     
    </div>
  );
}
