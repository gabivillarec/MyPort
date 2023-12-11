import style from './asideRight.module.css';
import contact from '../assets/contacto.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const AsideRight = () =>{

    const navigate = useNavigate();

    const [close , setClose] = useState(false);
    const [rotate, setRotate] = useState(false);

    const handleClose = () =>{
        setClose(!close);
        setRotate(!rotate);
    };
 
    
    return(
        <div className={style.right}>
            <button className={style.btnH} onClick={()=>navigate('/about')}>About</button>
            <img src={contact} className={rotate ? `${style.contact} ${style.rotate}` : style.contact} onClick={handleClose}/>
            {close ? <div className={style.clip}>
                <p>
                    WhatsApp:  <a
                        className={style.wap}
                        href="https://api.whatsapp.com/send?phone=5492644460454&text=Hola%20👋%20Me%20comunico%20contigo%20a%20través%20de%20tu%20portfolio.%20"
                        target="_blank"
                        rel="noopener noreferrer">
                        +54 2644 460454
                    </a><br/><br/>
                    Outlook : <a
                    className={style.mail} 
                    href="mailto:bl_182_bl@hotmail.com" 
                    target="sendEmail">
                        bl_182_bl@hotmail.com
                    </a><br/>
                </p>
            </div> : null}
        </div>
    )
};

export default AsideRight