import style from './projects.module.css'
import { useState, useEffect } from "react";
import AsideLeft from "../Home/AsideLeft/AsideLeft";
import Caja from './Caja/Caja';
import rick from './assets/rick.png'
import city from './assets/city.jpg'
import liliana from './assets/liliana.png'

const arrayPro = [
    {id:1 , title:"Rick and Morty", link:"https://github.com/gabivillarec/Proyecto-RaM", img:rick, 
    texto:"lorem lksahfglakshf lkashflkashf lkashflk asfhlkashf lkashflaksh flkashflk"},
    {id:2 , title:"City of Games", link:"https://github.com/gabivillarec/PI-Videogames-main", img:city, 
    texto:"lorem  lksahfglak shflkash flkashf lkashflkas fhlkashf lkashflak shflkashflk"},
    {id:3 , title:"Liliana Games", link:"https://github.com/gabivillarec/Liliana-GameStore", img:liliana, 
    texto:"lorem  lksahfglakshf lkashflkashfl kashflkasfh lkashflka shflak shflkashflk"}
] 

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
               {arrayPro.map(el=>{
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