import React from 'react'
import './Contact.css'
import message_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

const Contact = () => {
  return (
    <div className='contact'>
        <div className='contact-col'>
            <h3>Send us a mesage <img src={message_icon} alt="" /></h3>
            <p>
                Feel free to reach out through the contact or find out our
                contact information below. Your feedback, questions and
                suggestions are important to us as we strive tp provide
                exceptional service to our university community.
            </p>
            <ul>
                <li><img src={mail_icon} alt="" />cyrustabji@gmail.com</li>
                <li><img src={phone_icon} alt="" />+2348106028623</li>
                <li><img src={location_icon} alt="" />MAMUDA Group Bompai, Kano Nigeria.</li>
            </ul>
        </div>
        <div className='contact-col'>
            <form>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
                <label>Write your message here</label>
                <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Send</button>
            </form>
            <span></span>
        </div>
    </div>
  )
}

export default Contact