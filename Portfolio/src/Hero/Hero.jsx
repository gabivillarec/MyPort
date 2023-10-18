import style from './hero.module.css'


const Hero = () =>{

    return(
        <div className={style.hero}>
            <p className={style.saludo}>Hi, my name is</p>
            <h1 className={style.name}>Gabriel Villalobos.</h1>
            <h1 className={style.prof}>FullStack Developer and Winemaker.</h1>
            <p className={style.description}>I am a web developer with a love for the world of wine. My professional journey has been woven between lines of code and vineyards, merging my technological expertise with my passion for winemaking. As a developer, my focus is on creating exceptional digital experiences. This duality in my life inspires me to blend creativity and precision in every project. Welcome to my world, where technology and wine come together!</p>
        </div>
    )
};

export default Hero