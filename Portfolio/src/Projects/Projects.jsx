import style from './projects.module.css'
import { useState, useEffect } from "react";
import AsideLeft from "../Home/AsideLeft/AsideLeft";
import Caja from './Caja/Caja';

const Projects = () =>{

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);

        return () => {
            setIsVisible(false);
          };
     }, []);

    return(
        <div className={style.container}>
            <AsideLeft/>
            <div className={`${style.pro} ${isVisible ? style.fadeIn : ''}`}>
                <Caja/>
                <Caja/>
                <Caja/>

            </div>
        </div>
    )
};

export default Projects