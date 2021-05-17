import './Home.scss'
import { motion } from 'framer-motion'

export default function Home(props){
    return (
        <motion.div className="home" id="home">
            <motion.h1 
            animate={{opacity: [0,1],y:[-200, 0]}} 
            transition={{type:'spring'}}>
                Hi!</motion.h1>
            <motion.h2 animate={{opacity: [0,1],y:[-200, 0]}}>I'm Sean, a software engineer currently based in <span>Sydney, Australia</span></motion.h2>
            <motion.span animate={{opacity: [0,1]}} className="material-icons down-arrow" onClick={()=>props.setCurrPage(2)}>expand_more</motion.span>
            {/* <div className="opera-house">
                <div className="wing1"></div>
                <div className="wing2"></div>
                <div className="wing4"></div>
                <div className="wing5"></div>
                <div className="wing3"></div>
            </div> */}
        </motion.div>
    )
}