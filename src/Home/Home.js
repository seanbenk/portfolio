import './Home.scss'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Home(props){
    return (
        // <motion.div className="home" id="home">
        //     <motion.h1 
        //     animate={{opacity: [0,1],y:[-200, 0]}} 
        //     transition={{type:'spring'}}>
        //         Hi!
        //     </motion.h1>
        //     <motion.h2 animate={{opacity: [0,1],y:[-200, 0]}}>
        //         I'm Sean, a software engineer currently based in <span>Sydney, Australia</span>
        //     </motion.h2>
        //     <motion.span 
        //         animate={{opacity: [0,1]}} className="material-icons down-arrow">
        //             <Link to="about">expand_more</Link>
        //     </motion.span>
        // </motion.div>
        <div className="home" id="home">
        <h1 
        animate={{opacity: [0,1],y:[-200, 0]}} 
        transition={{type:'spring'}}>
            Hi!
        </h1>
        <h2 animate={{opacity: [0,1],y:[-200, 0]}}>
            I'm Sean, a software engineer currently based in <span>Sydney, Australia</span>
        </h2>
    </div>
    )
}