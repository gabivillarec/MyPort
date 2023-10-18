import style from './App.module.css';
import Header from './Header/Header.jsx';
import AsideLeft from './AsideLeft/AsideLeft';
import AsideRight from './AsideRight/AsideRight';


function App() {

  return (
    <div className={style.home}>
      <Header/>

      <div className={style.container}>
        <AsideLeft/>
        <h1>PortFolio</h1>
        <AsideRight/>
      </div>
      
    </div>
  )
}

export default App
