import './App.css';
import { useState } from 'react'
import Nav from './Nav/Nav'
import Home from './Home/Home'
import About from './About/About'
import Contact from './Contact/Contact'
import Projects from './Projects/Projects'
import Footer from './Footer/Footer'

export default function App(){

  const [showNav, setShowNav] = useState(false)
  const [showProjects, setShowProjects] = useState(true)
  const [navState, setNavState] = useState(1)

  function toggleShowNav(){
    setShowNav(prev => !prev)
  }

  const setCurrPage = str => {
    setNavState(str)
    setShowNav(false)
    setShowProjects(false)
}
  
  function toggleShowProjects(){
    setShowProjects(prev => !prev)
  }

  function getCurrentPage(){
    switch(navState){
      case 1: return <Home setCurrPage={setCurrPage}/>
      case 2: return <About />
      case 3: return <Contact />
      default: return <Home />
    }
  }

  return (
    <div>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"></link>
      <Nav showNav={showNav} toggleShowNav={toggleShowNav} navState={navState} setCurrPage={setCurrPage}/>
      {getCurrentPage()}
      <Projects showProjects={showProjects}/>
      <Footer showProjects={showProjects} toggleShowProjects={toggleShowProjects}/>
    </div>
  )
}