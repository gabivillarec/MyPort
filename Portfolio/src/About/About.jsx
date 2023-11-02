import { useState, useEffect } from 'react';
import style from './about.module.css'
import AsideLeft from "../Home/AsideLeft/AsideLeft";
import yo from "./assets/yo.png"

const About = () =>{

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);

        return () => {
            setIsVisible(false);
          };
     }, []);

    return (
        <div className={style.container}>
            <AsideLeft/>
            <div className={`${style.resume} ${isVisible ? style.fadeIn : ''}`}>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis vel, doloribus porro odit praesentium facere in voluptatum, iure eveniet voluptas eum enim alias consequatur beatae ipsam quos. Eum, voluptas architecto! </p>
                <img src={yo} alt="Gabriel Villalobos" className={style.yo} />
            </div>
        </div>
    )
};

export default About