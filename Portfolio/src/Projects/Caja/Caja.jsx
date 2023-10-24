import style from './caja.module.css'
import github from '../assets/github.svg'

const Caja = ({title,link,img,texto}) =>{

    return(

        <div className={style.box}>
            <div className={style.head}>
                <div className={style.title}>
                    <h2>{title}</h2>
                    <a href={link} target="_blank" rel='noreferrer'><img src={github} className={style.git}  /></a>
                </div>
                <div className={style.squad}>
                    <img src={img} alt={title + ".img"} className={style.imagen}/>
                </div>
            </div>
            <div className={style.description}>
                <p>{texto}</p>
            </div>
        </div>

    )
};

export default Caja;