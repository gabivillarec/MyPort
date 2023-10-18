import style from './asideLeft.module.css'
import barril from '../assets/barril.png'
import github from '../assets/github.svg'
import facebook from '../assets/facebook.svg'
import linkedin from '../assets/linkedin.svg'

const AsideLeft = () =>{

    return(
        <div className={style.left}>
            <div className={style.botonera}>
                <img src={github} className={style.git}/>
                <img src={linkedin} className={style.link}/>
                <img src={facebook} className={style.face}/>
                <img src={barril} className={style.barril}/>
            </div>
        </div>
    )
}

export default AsideLeft