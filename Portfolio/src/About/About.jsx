import { useState, useEffect } from 'react';
import style from './about.module.css'
import AsideLeft from "../Home/AsideLeft/AsideLeft";

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
                <h1>Esto es about</h1>
            </div>
        </div>
    )
};

export default About