import style from './hero.module.css'
import { useNavigate } from 'react-router-dom';


const Hero = () =>{

    const navigate = useNavigate();


    return(
        <div className={style.heros}>
            <p className={style.saludo}>Hi, my name is</p>
            <h1 className={style.name}>Gabriel Villalobos.</h1>
            <h1 className={style.prof}>FullStack Developer and Winemaker.</h1>
            <p className={style.description}>I'm a web developer with a love for the world of wine. As a developer, my focus is on creating exceptional digital experiences. This duality in my life inspires me to blend creativity and precision in every project.</p>
            <button className={style.btn} onClick={()=>navigate('/projects')}>Projects</button>
            <button className={style.btnH} onClick={()=>navigate('/about')}>About</button>
        </div>
    )
};

export default Hero