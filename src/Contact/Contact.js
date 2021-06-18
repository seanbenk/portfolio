import './Contact.scss'
import { Link } from 'react-router-dom'

export default function Contact(){
    return (
        <div className="contact" id="contact">
            <div className="contact-wrapper">
                <h1>Contact</h1>
                <h2>Email:</h2>
                <p>seanbenkenstein@gmail.com</p>
                <h2>Phone:</h2>
                <p>0439 000 690</p>
            </div>
            <Link exact to='/about'>
                <span class="material-icons arrow left-arrow">
                keyboard_arrow_left
                </span>
            </Link>
        </div>
    )
}