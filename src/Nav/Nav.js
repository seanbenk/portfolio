import './Nav.scss'
import { motion } from 'framer-motion'

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

export default function Nav(props){

    function getClassName(num){
        return num === props.navState?'selected':''
    }

    return (
        <motion.nav className={props.showNav?"show-nav":""}
        initial={false}
        animate={props.showNav?{
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
                <div className={props.showNav? "burger-container  show-nav":"burger-container"} 
                onClick={props.toggleShowNav}>
                    <div className="burger-1"></div>
                    <div className="burger-2"></div>
                    <div className="burger-3"></div>
                </div>
            </div>
            <motion.ul 
            variants={container}
            initial="hidden"
            animate={props.showNav?'show':'hidden'}>
                <motion.li variants={item} onClick={() => props.setCurrPage(1)} className={getClassName(1)}>Home</motion.li>
                <motion.li variants={item} onClick={() => props.setCurrPage(2)} className={getClassName(2)}>About Me</motion.li>
                <motion.li variants={item} onClick={() => props.setCurrPage(3)} className={getClassName(3)}>Contact</motion.li>
            </motion.ul>
        </motion.nav>
    )
}