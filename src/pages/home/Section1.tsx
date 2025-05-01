import { useEffect, useState } from 'react';
import '../../assets/scss/Section1.scss';


export default function Section1() {
  const [textactive, settextactive] = useState(false);
  const [showCircle, setShowCircle] = useState(false);

  const [bgIndex, setbgIndex] = useState(0);

  const bgImages = [`${import.meta.env.BASE_URL}img/img1.jpg`, `${import.meta.env.BASE_URL}img/img3.jpg`, `${import.meta.env.BASE_URL}img/img4.jpg`];

  useEffect(() => {
    const timer = setTimeout(() => settextactive(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleNext = () => {
    setShowCircle(true);

    setTimeout(() => {
      setbgIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
      // setbgIndex((prevIndex) => {
      //   const nextIndex = prevIndex + 1;
      //   if (nextIndex >= bgImages.length) {
      //     return 0; // 다시 처음으로
      //   } else {
      //     return nextIndex; // 다음 이미지로
      //   }
      // });
    }, 500);

 

    // 2초 후 원을 DOM에서 제거
    setTimeout(() => {
      setShowCircle(false);
    }, 2000);
  };


  return (
    <div className="section1">
      {bgImages.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`Background ${idx}`}
          className={`bg-image ${bgIndex === idx ? 'visible' : ''}`}
        />
      ))}

      <div className={`text-box ${textactive ? 'visible' : ''}`}>
        <h1>Welcome to TypeProject</h1>
        <button onClick={handleNext}>다음 이미지</button>
      </div>

      {showCircle && <div className="circle-overlay" />} {/* ✅ 조건부로만 DOM에 존재 */}
    </div>
  );
}
