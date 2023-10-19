import style from './App.module.css';
import Home from './Home/Home';
import About from './About/About';
import Projects from './Projects/Projects';

import { Route, Routes } from 'react-router-dom';

function App() {



  return (
  <div className={style.container}>
    <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
    </Routes>
  </div>

  )
}

export default App
