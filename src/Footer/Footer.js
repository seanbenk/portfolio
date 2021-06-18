import './Footer.scss'
import { motion } from 'framer-motion'

export default function Footer(props){
    return (
        <footer onClick={props.toggleShowProjects}>
            <motion.div className="footer-wrapper"             
            animate={props.showProjects? {y: [0, 300]}:{y:[300, 0]}}
            transition={{duration:0.5}}>
                <h2>See My Projects</h2>
            </motion.div>
            <motion.div className="footer-wrapper" 
            animate={props.showProjects? {y: [300, 0]}:{y:[0, 300]}}
            transition={{duration:0.5}}>
                <h2>Hide Projects</h2>
            </motion.div>
        </footer>
    )
}