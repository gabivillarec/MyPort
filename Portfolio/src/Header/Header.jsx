import style from './header.module.css';
import copa from '../assets/copa-de-vino.png';

const Header = ()=>{

    return(
        <div className={style.header}>

            <img src={copa} className={style.copa}/>
            <section className={style.botones}>
            <button className={style.btnH}>About</button>
            <button className={style.btnH}>Projects</button>
            </section>

        </div>
    )
};

export default Header