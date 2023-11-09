import { useState, useEffect } from 'react';
import style from './about.module.css'
import AsideLeft from "../Home/AsideLeft/AsideLeft";
import yo from "./assets/yo.png"
import analitica from "./assets/analitica.png"

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
                    <p className={style.acerca}><span className={style.greet}>Greetings</span>, I am a <em>web developer</em> and <em>winemaker</em> with a passion for the world of wine and a strong background in web development.
                    <p>My fascination with chemistry led me to explore the universe of wine. I have acquired all the necessary knowledge to approach winemaking professionally, having undertaken multiple projects involving homemade wines beyond commercial products.</p>
                    <p>However, oenology is not the only facet that defines me. From an early age, technology, especially computers, has been my passion. I became a self-taught individual in this field, providing software maintenance services to various clients who rely on my expertise to address their IT needs.</p>
                    <p>My foray into web development was driven by curiosity, as it was not initially the branch of informatics that attracted me the most. In 2020, I had my first encounter with a programming language, <em>JavaScript</em>. At that time, I found it challenging to grasp, as I lacked knowledge of <em>HTML</em> and <em>CSS</em>. Nevertheless, I dedicated myself to learning these fundamentals and prepared to join <a href='https://www.soyhenry.com/' target='_blank'rel="noreferrer" className={style.henry} >HENRY</a>, where I participated in a bootcamp that expanded my knowledge.</p>
                    <p>Currently, working with programming languages has opened up new horizons for me and motivated me to continue developing in this field. I am eager to keep learning and exploring this exciting and challenging world.</p>
                    <p>If you would like to learn more about my career, please do not hesitate to review my <a className={style.cv} href='https://drive.google.com/file/d/1JkfL9NCh8BupqDk6PF3BTy0Z9zFf4YDe/view?usp=drive_link' target='_blank'rel="noreferrer">CV</a>.</p></p>
                                        
                    <div className={style.logoBox}> 
                        <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
                            <img src={css3} alt="css3" className={style.logos}/></a>
                        <a href="https://html.spec.whatwg.org/multipage/" target="_blank" rel="noreferrer">
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
                <img src={analitica} className={style.ana}></img>
            </div>
        </div>
    )
};

export default About