import style from './asideRight.module.css'
import contact from '../assets/contacto.svg'
import { useNavigate } from 'react-router-dom';

const AsideRight = () =>{

    const navigate = useNavigate();


    return(
        <div className={style.right}>
            <button className={style.btnH} onClick={()=>navigate('/about')}>About</button>
            <img src={contact} className={style.contact}/>
        </div>
    )
};

export default AsideRight