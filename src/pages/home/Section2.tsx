
import { useEffect, useRef, useState } from 'react';
import '../../assets/scss/Section2.scss';

export default function Section2() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightTopRef = useRef<HTMLDivElement>(null);
  const rightBottomRef = useRef<HTMLDivElement>(null);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(1000);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          leftRef.current?.classList.add('active');

          // 오른쪽 상단 문장은 1초 후 등장
          setTimeout(() => {
            rightTopRef.current?.classList.add('active');
          }, 500);

          // 숫자 카운터는 2초 후 시작
          setTimeout(() => {
            rightBottomRef.current?.classList.add('active');
            startCountAnimation();
          }, 2000);

          setHasAnimated(true);
        }
      },
      { threshold: 0.6 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const startCountAnimation = () => {
    let num1 = 0;
    let num2 = 1000;

    const timer1 = setInterval(() => {
      num1 += 2;
      setCount1(num1);
      if (num1 >= 100) clearInterval(timer1);
    }, 50);

    const timer2 = setInterval(() => {
      num2 += 100;
      setCount2(num2);
      if (num2 >= 10000) clearInterval(timer2);
    }, 50);
  };

  return (
    <section className="section2" ref={sectionRef}>
      <div className="left" ref={leftRef}>
        <h2>Our Story</h2>
      </div>
      <div className="right">
        <div className="top" ref={rightTopRef}>
          <h3>To Strive for a Healthy Life and Empower Growth in Your Business</h3>
          <p>We bring more to the table—growing side by side with our customers. With customized services, unmatched expertise, and innovative connections, we deliver exceptional F&B solutions for healthier lives and businesses. We don’t just lead the future—we shape it. We are Samsung Welstory.</p>
        </div>
        <div className="bottom" ref={rightBottomRef}>
         
            <span className='counttext'><span>{count1}</span> million meals</span>
            <span className='counttext'><span>{count2.toLocaleString()}</span> clients</span>
  
        </div>
      </div>
    </section>
  );
}
