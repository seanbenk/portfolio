import './App.css';
import { useState } from 'react'
import Nav from './Nav/Nav'
import AboutMe from './AboutMe/AboutMe'
import Scene from './Scene/Scene'
import Footer from './Footer/Footer'

export default function App(){

  const [showNav, setShowNav] = useState(false)
  const [showProjects, setShowProjects] = useState(false)

  function toggleShowNav(){
    setShowNav(prev => !prev)
  }

  function toggleShowProjects(){
    setShowProjects(prev => !prev)
  }

  return (
    <div>
      <Nav showNav={showNav} toggleShowNav={toggleShowNav}/>
      <AboutMe/>
      <Scene showProjects={showProjects}/>
      <Footer showProjects={showProjects} toggleShowProjects={toggleShowProjects}/>
    </div>
  )
}