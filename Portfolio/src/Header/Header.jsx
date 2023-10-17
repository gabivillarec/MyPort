import style from './header.module.css';
import copa from '../assets/copa-de-vino.png';

const Header = ()=>{

    return(
        <div className={style.header}>

            <img src={copa}/>
            <section className={style.botones}>
            <button>About</button>
            <button>Projects</button>
            </section>

        </div>
    )
};

export default Header