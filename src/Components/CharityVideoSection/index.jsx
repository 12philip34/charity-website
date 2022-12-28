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
                    <div className={style.backdrop}></div>
                    <div className={style.imageBox}>
                        <img src={Video} alt="Video.png"/>
                    </div>
                </div>
                <div className={style.right}>
                    <small>About CharityHeal</small>
                    <h1>We make this world better for poor children.</h1>
                    <p>
                        These are the goals for NYAGI in Tanzania.
                        We hope to increase the amount of traiges and
                        skilled medical providers for mothers
                        as well as lower neonatal deaths and stillbirths.
                    </p>
                    <label>
                        <span><DoneAllIcon style={checkIcon}/>Ensure better healthcare</span>
                        <span><DoneAllIcon style={checkIcon}/>Construct good accomodation</span>
                        <span><DoneAllIcon style={checkIcon}/>Teach proper Education</span>
                        <span><DoneAllIcon style={checkIcon}/>Change prespective about life</span>
                    </label>
                </div>
            </section>
            <button><a href="#">Know More Details</a></button>
        </div>
    )
}

export default CharityVideoSection;