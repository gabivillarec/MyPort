import style from './asideLeft.module.css'
import github from '../assets/github.svg'
import facebook from '../assets/facebook.svg'
import linkedin from '../assets/linkedin.svg'
import copa from '../assets/copa-de-vino.png';

const AsideLeft = () =>{

    return(
        <div className={style.left}>

            <img src={copa} className={style.copa}/>

            <div className={style.botonera}>
                <img src={github} className={style.git}/>
                <img src={linkedin} className={style.link} />
                <img src={facebook} className={style.face}/>
            </div>

        </div>
    )
}

export default AsideLeft