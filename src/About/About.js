import './About.scss'
import { motion } from 'framer-motion'

export default function About(){
    return (
        <div className="about" id="about">
            <motion.h1 animate={{opacity: [0,1]}}>About me</motion.h1>
            <motion.p animate={{opacity: [0,1]}}>I have been coding as a hobby since high school and decided to take it a little  more seriously at the start of 2021. I love diving into new projects and extending my knowledge of languages/frameworks and coding concepts. In my free time I rock climb and enjoy trying new sports and food.</motion.p>
        </div>
    )
}