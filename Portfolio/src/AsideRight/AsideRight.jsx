import style from './asideRight.module.css'
import contact from '../assets/contacto.svg'

const AsideRight = () =>{

    return(
        <div className={style.right}>
            <img src={contact} className={style.contact}/>
        </div>
    )
};

export default AsideRight