import React from 'react'
import './About.css'
import about_image from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_image} alt='' className='about-img'/>
            <img src={play_icon} alt=''className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className='about-right'>
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nuturing Tomorrow's Leaders Today</h2>
            <p>Embark on a transformative educational journey with our
                university's comprehensive education programs. Our cutting edge
                curriculum is designed to empower student with the knowledge, 
                skills and experince needed to excell in the dynamic field of
                education.
            </p>
            <p>With a focus on innovation, hands on learning and personalized 
                mentorship, our program prepare aspiring educators to make a 
                meaning impacts in classrooms, schools and communities.
            </p>
            <p>Whether you aspire to become a teacher, administrator, counselor 
                or educational leader, our diverse range of program offers the 
                perfect path way to achieve your goals and unlock your full 
                potential in shaping the future of education.
            </p>
        </div>
    </div>
  )
}

export default About