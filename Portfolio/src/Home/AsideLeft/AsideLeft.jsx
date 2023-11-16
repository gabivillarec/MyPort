import style from './asideLeft.module.css'
import github from '../assets/github.svg'
import facebook from '../assets/facebook.svg'
import linkedin from '../assets/linkedin.svg'
import copa from '../assets/copa-de-vino.png';
import { useNavigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types'

const AsideLeft = ({restartAnimation}) =>{

    const navigate = useNavigate();
    const location = useLocation();

    // Verifica si la ubicación actual es "/"
    const isRootPath = location.pathname === '/' || location.pathname === "/about";

    // Aplica clases condicionalmente
    const claseBotonera = isRootPath ? style.botoneraHome : style.botonera;


    const handleCup = () => {
        navigate('/');
        restartAnimation;
      };

    return(
        <div className={style.left}>

        <img src={copa} className={style.copa} onClick={handleCup}/>

            <div className={claseBotonera}>
                <a href="https://github.com/gabivillarec" target="_blank" rel='noreferrer'><img src={github} className={style.git}/></a>
                <a href="https://www.linkedin.com/in/gabriel-villalobos-546b29a7/" target="_blank" rel='noreferrer'><img src={linkedin} className={style.link}/></a>
                <a href="https://www.facebook.com/GabrielVillalobosRecabarren/" target="_blank" rel='noreferrer'><img src={facebook} className={style.face}/></a>
            </div>

        </div>
    )
};

AsideLeft.propTypes = {
    restartAnimation: PropTypes.func,
  }

export default AsideLeft