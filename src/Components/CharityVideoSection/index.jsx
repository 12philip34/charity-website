import React from 'react'
import style from './styee.module.css'
import Video from '../../Images/cha8.jpg'
import DoneAllIcon from '@mui/icons-material/DoneAll';

const CharityVideoSection = () => {

    const checkIcon = {
        color: '#e69f0c',
        fontSize: '20px',
        paddingRight: '3px'
    }

    return (
        <div className={style.charityBox}>
            <section className={style.videoContainer}>
                <div className={style.left}>
                    <div data-aos-easing="linear"
                         data-aos-duration="1500" data-aos="zoom-out" className={style.backdrop}></div>
                    <div data-aos-easing="linear"
                         data-aos-duration="1500" data-aos="zoom-out-up" className={style.imageBox}>
                        <img src={Video} alt="Video.png"/>
                    </div>
                </div>
                <div className={style.right}>
                    <small data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">About CharityHeal</small>
                    <h1 data-aos="fade-right" data-aos-offset="400" data-aos-easing="ease-in-sine">We make this world better for poor children.</h1>
                    <p data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                        These are the goals for NYAGI in Tanzania.
                        We hope to increase the amount of traiges and
                        skilled medical providers for mothers
                        as well as lower neonatal deaths and stillbirths.
                    </p>
                    <label>
                        <span data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine"><DoneAllIcon style={checkIcon}/>Ensure better healthcare</span>
                        <span data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine"><DoneAllIcon style={checkIcon}/>Construct good accomodation</span>
                        <span data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine"><DoneAllIcon style={checkIcon}/>Teach proper Education</span>
                        <span data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine"><DoneAllIcon style={checkIcon}/>Change prespective about life</span>
                    </label>
                </div>
            </section>
            <button data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="200"
                    data-aos-offset="0"><a href="#">Know More Details</a></button>
        </div>
    )
}

export default CharityVideoSection;