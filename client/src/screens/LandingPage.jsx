
import React, { useEffect, useRef } from 'react';
import '../screens/styles.css';
import hill1 from '../assets/hill1.png';
import hill2 from '../assets/hill2.png';
import hill3 from '../assets/hill3.png';
import hill4 from '../assets/hill4.png';
import hill5 from '../assets/hill5.png';
import tree from '../assets/tree.png';
import leaf from '../assets/leaf.png';
import plant from '../assets/plant.png';
import { TypeAnimation } from 'react-type-animation';
import SearchTrip from '../components/SearchTrip';

const LandingPage = () => {
  const sloganRef = useRef(null);
  const leafRef = useRef(null);
  const hill1Ref = useRef(null);
  const hill4Ref = useRef(null);
  const hill5Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;

      if (sloganRef.current) sloganRef.current.style.marginTop = `${value * 2.5}px`;
      if (leafRef.current) {
        leafRef.current.style.top = `${value * -1.5}px`;
        leafRef.current.style.left = `${value * 1.5}px`;
      }
      if (hill5Ref.current) hill5Ref.current.style.left = `${value * 1.5}px`;
      if (hill4Ref.current) hill4Ref.current.style.left = `${value * -1.5}px`;
      if (hill1Ref.current) hill1Ref.current.style.top = `${value * 1}px`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.minHeight = '100vh';
    document.body.style.overflowX = 'hidden';

    // Clean up the body styles when the component unmounts
    return () => {
      document.body.style.minHeight = '';
      document.body.style.overflowX = '';
    };
  }, []);

  return (
    <>
    <div className="parallex">
      <img src={hill1} ref={hill1Ref} id="hill1" alt="hill1" />
      <img src={hill2} id="hill2" alt="hill2" />
      <img src={hill3} id="hill3" alt="hill3" />
      <img src={hill4} ref={hill4Ref} id="hill4" alt="hill4" />
      <img src={hill5} ref={hill5Ref} id="hill5" alt="hill5" />
      <img src={tree} id="tree" alt="tree" />
      <p ref={sloganRef} className="slogan" id="slogan">
      <TypeAnimation
      sequence={[
        'Pack', 
        1000,
        'Travel, ',
        1000,
        'Then Share',
        1000,
      
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em', display: 'inline-block' }}
    />
      </p>
      <img src={leaf} ref={leafRef} id="leaf" alt="leaf" />
      <img src={plant} id="plant" alt="plant" />
    </div>
    <SearchTrip />
    </>
  );
};

export default LandingPage;
