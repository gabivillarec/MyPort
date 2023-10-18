import style from './App.module.css';
import Header from './Header/Header.jsx';
import AsideLeft from './AsideLeft/AsideLeft';
import AsideRight from './AsideRight/AsideRight';
import Hero from './Hero/Hero';


function App() {

  return (
    <div className={style.home}>
      <Header/>

      <div className={style.container}>
        <AsideLeft/>
        <Hero/>
        <AsideRight/>
      </div>
      
    </div>
  )
}

export default App
