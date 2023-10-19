import style from './projects.module.css'
import { useState, useEffect } from "react";
import AsideLeft from "../Home/AsideLeft/AsideLeft";


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
                <h1>asfasf</h1>
            </div>
        </div>
    )
};

export default Projects