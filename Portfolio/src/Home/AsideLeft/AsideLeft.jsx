import style from './asideLeft.module.css'
import github from '../assets/github.svg'
import facebook from '../assets/facebook.svg'
import linkedin from '../assets/linkedin.svg'
import copa from '../assets/copa-de-vino.png';
import { useNavigate } from 'react-router-dom';

const AsideLeft = ({restartAnimation}) =>{

    const navigate = useNavigate();

    const handleCup = () => {
        navigate('/');
        restartAnimation()
      };

    return(
        <div className={style.left}>

            <img src={copa} className={style.copa} onClick={handleCup}/>

            <div className={style.botonera}>
                <a href="https://github.com/gabivillarec" target='blank'><img src={github} className={style.git}/></a>
                <a href="https://www.linkedin.com/in/gabriel-villalobos-546b29a7/" target='blank'><img src={linkedin} className={style.link}/></a>
                <a href="https://www.facebook.com/GabrielVillalobosRecabarren/" target='blank'><img src={facebook} className={style.face}/></a>
            </div>

        </div>
    )
}

export default AsideLeft