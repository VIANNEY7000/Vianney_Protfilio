import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './PAGES/Home'
import About from './PAGES/About'
import Projects from './PAGES/Projects'
import Contact from './PAGES/Contact'
import Navbar from './COMPONENT/Navbar'
import Footer from './COMPONENT/Footer'

const App = () => {
  return (
    <>
     <Navbar/>
      <div className="name_nav">
           <h2> VIANNEY PROFOLIO</h2>
        </div>
   <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Projects' element={<Projects/>}/>
      <Route path='/Contact' element={<Contact/>}/>
   </Routes>
   <Footer/>

    </>
  )
}

export default App