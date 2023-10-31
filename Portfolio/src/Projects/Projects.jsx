import style from './projects.module.css';
import { useState, useEffect } from "react";
import AsideLeft from "../Home/AsideLeft/AsideLeft";
import data from './data';
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
               {data.map(el=>{
                return(
                    <Caja
                    key= {el.id}
                    title= {el.title}
                    link= {el.link}
                    img= {el.img}
                    texto= {el.texto}
                />)
                })
            }

            </div>
        </div>
    )
};

export default Projects