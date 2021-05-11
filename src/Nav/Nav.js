import './Nav.css'
import { motion } from 'framer-motion'

export default function Nav(props){
    return (
        <motion.nav className={props.showNav?"show-nav":""}
        animate={props.showNav?{
            right: 0,
            top: 0,
            height: '100vh',
            width: '30vw',
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
            <ul>
                <li><a href="#about-me">About Me</a></li>
                <li><a href="#projects">Projects</a></li>
            </ul>
        </motion.nav>
    )
}