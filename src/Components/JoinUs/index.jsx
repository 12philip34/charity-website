import React from 'react'
import style from './style.module.css'
import cha7 from '../../Images/cha7.jpg'

const JoinUs = () => {

    return (
        <div>
            <div className={style.joinUs}>
                <small data-aos="fade-up"
                       data-aos-duration="2000">Feature causes</small>
                <h1 data-aos="fade-up"
                    data-aos-duration="3000">Be a volunteer of ours in the nearest location.</h1>
            </div>
            <div className={style.joinUsImageBox}>
                <img data-aos="fade-down"
                     data-aos-easing="linear"
                     data-aos-duration="1500" src={cha7} alt="volunteer.jpg"/>
                <div data-aos="fade-down"
                     data-aos-easing="linear"
                     data-aos-duration="1500" className={style.joinUsInfoBox}>
                    <span className={style.spanOne}></span>
                    <span className={style.spanTwo}></span>
                    <h1>please provide valid information</h1>
                    <label>
                        <input type="text" placeholder='Your Name'/>
                        <input type='text' placeholder='Location'/>
                        <input type="email" placeholder='Email'/>
                    </label>
                    <button className={style.joinBtn}>Join With Us Now</button>
                </div>
            </div>
        </div>
    )
}

export default JoinUs;