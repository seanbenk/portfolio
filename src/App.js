import './App.css';
import { useState } from 'react'
import Nav from './Nav/Nav'
import Home from './Home/Home'
import About from './About/About'
import Contact from './Contact/Contact'
import Projects from './Projects/Projects'
import NotFound from './NotFound/NotFound'
import Footer from './Footer/Footer'
import { Switch, Route } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

export default function App(){

  const [showNav, setShowNav] = useState(false)
  const [showProjects, setShowProjects] = useState(false)

  function toggleShowNav(){
    setShowNav(prev => !prev)
  }
  
  function toggleShowProjects(){
    setShowProjects(prev => !prev)
  }

  function navItemClicked(){
    setShowNav(false)
    setShowProjects(false)
  }

  return (
    <div>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"></link>
      <Nav showNav={showNav} toggleShowNav={toggleShowNav} navItemClicked={navItemClicked}/>
      <Route render={({location})=> (
        <TransitionGroup>
        <CSSTransition
        in={true}
            key={location.key}
            classNames="page"
            timeout={500}>
          <Switch location={location}>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About}/>
              <Route path="/contact" component={Contact}/>
              <Route component={NotFound}/>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}/>
      <Projects showProjects={showProjects}/>
      <Footer showProjects={showProjects} toggleShowProjects={toggleShowProjects}/>
    </div>
  )
}