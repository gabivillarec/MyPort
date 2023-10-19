import style from './home.module.css';
import AsideLeft from './AsideLeft/AsideLeft';
import AsideRight from './AsideRight/AsideRight';
import Hero from './Hero/Hero';
import { useState, useEffect } from 'react';


const Home = () =>{

    const [isVisible, setIsVisible] = useState(false);

     useEffect(() => {
        setIsVisible(true);

        return () => {
            setIsVisible(false);
          };
     }, []);

     const restartAnimation = () => {
        isVisible && setIsVisible(false);
        setTimeout(() => {
          setIsVisible(true);
        }, 350);
      };
     
    return (
        <div className={`${style.home} ${isVisible ? style.fadeIn : ''}`}>
            <AsideLeft restartAnimation={restartAnimation}/>
            <Hero/>
            <AsideRight/>
        </div>
    )
};

export default Home