import './About.scss'
import { Link } from 'react-router-dom'

export default function About(){

    return (
        <div className="about" id="about">
            <h1 animate={{opacity: [0,1]}}>About me</h1>
            <p animate={{opacity: [0,1]}}>I have been coding as a hobby since high school and decided to take it a little more seriously mid 2020. I love diving into new projects and extending my knowledge of languages/frameworks and coding concepts. In my free time I rock climb and enjoy trying new sports and playing guitar. I am always looking for new projects and opportunities to grow myself both as a programmer and person.</p>
            <Link exact to='/'>
                <span class="material-icons arrow left-arrow">
                keyboard_arrow_left
                </span>
            </Link>
            <Link exact to='/contact'>
                <span class="material-icons arrow right-arrow">
                keyboard_arrow_right
                </span>
            </Link>
        </div>
    )
}