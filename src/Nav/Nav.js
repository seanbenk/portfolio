import './Nav.scss'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0, x: 100 },
    show: { opacity: 1, x: 0 }
  }

export default function Nav({ showNav, toggleShowNav, navItemClicked }){

    return (
        <motion.nav className={showNav?"show-nav":""}
        initial={false}
        animate={showNav?{
            right: 0,
            top: 0,
            height: '100vh',
            width: '50vw',
            borderRadius: 0
        }:{
            right: '2.5vh',
            top: '2.5vh',
            height: '10vh',
            width: '10vh',
            borderRadius: '100vh'
        }
        }>
            <div className="burger-wrapper">
                <div className={showNav? "burger-container  show-nav":"burger-container"} 
                onClick={toggleShowNav}>
                    <div className="burger-1"></div>
                    <div className="burger-2"></div>
                    <div className="burger-3"></div>
                </div>
            </div>
            <motion.ul 
            variants={container}
            initial="hidden"
            animate={showNav?'show':'hidden'}>
                <motion.li onClick={navItemClicked} variants={item}><Link to='/'>Home</Link></motion.li>
                <motion.li onClick={navItemClicked} variants={item}><Link to='/about'>About Me</Link></motion.li>
                <motion.li onClick={navItemClicked} variants={item}><Link to='/contact'>Contact</Link></motion.li>
            </motion.ul>
        </motion.nav>
    )
}