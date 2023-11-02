import { useState, useEffect } from 'react';
import style from './about.module.css'
import AsideLeft from "../Home/AsideLeft/AsideLeft";
import yo from "./assets/yo.png"

let css3 = "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg";
let html5 = "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg";
let javaScript = "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg";
let nodeJs = "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg";
let express = "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg";
let postgres = "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg";
let react = "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg";
let redux = "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg";


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
                <div className={style.text}>
                    <h1>Título del about</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis vel, doloribus porro odit praesentium facere in voluptatum, iure eveniet voluptas eum enim alias consequatur beatae ipsam quos. Eum, voluptas architecto!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis vel, doloribus porro odit praesentium facere in voluptatum, iure eveniet voluptas eum enim alias consequatur beatae ipsam quos. Eum, voluptas architecto!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis vel, doloribus porro odit praesentium facere in voluptatum, iure eveniet voluptas eum enim alias consequatur beatae ipsam quos. Eum, voluptas architecto!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis vel, doloribus porro odit praesentium facere in voluptatum, iure eveniet voluptas eum enim alias consequatur beatae ipsam quos. Eum, voluptas architecto!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis vel, doloribus porro odit praesentium facere in voluptatum, iure eveniet voluptas eum enim alias consequatur beatae ipsam quos. Eum, voluptas architecto!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis vel, doloribus porro odit praesentium facere in voluptatum, iure eveniet voluptas eum enim alias consequatur beatae ipsam quos. Eum, voluptas architecto!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis vel, doloribus porro odit praesentium facere in voluptatum, iure eveniet voluptas eum enim alias consequatur beatae ipsam quos. Eum, voluptas architecto! </p>
                    
                    <div className={style.logoBox}> 
                        <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
                            <img src={css3} alt="css3" className={style.logos}/></a>
                        <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
                            <img src={html5} alt="html5" className={style.logos}/></a>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
                            <img src={javaScript} alt="javascript" className={style.logos}/></a>
                        <a href="https://nodejs.org" target="_blank" rel="noreferrer">
                            <img src={nodeJs} alt="nodejs" className={style.logos}/></a>
                        <a href="https://expressjs.com" target="_blank" rel="noreferrer">
                            <img src={express} alt="express" className={style.logos}/></a>
                        <a href="https://www.postgresql.org" target="_blank" rel="noreferrer">
                            <img src={postgres} alt="postgresql" className={style.logos}/></a>
                        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                            <img src={react} alt="react" className={style.logos}/></a>
                        <a href="https://redux.js.org" target="_blank" rel="noreferrer">
                            <img src={redux} alt="redux" className={style.logos}/></a> 
                    </div>
                
                </div>
                <img src={yo} alt="Gabriel Villalobos" className={style.yo} />
            </div>
        </div>
    )
};

export default About