import React from 'react'
import './style.css'




const Slider = () => {

    return (
        <div>
            <div className="introSection">
                <div className="innerText">
                    <span>
                        <h1 data-aos="fade-right" data-aos-easing="linear"
                            data-aos-duration="1500">
                            Donate for the poor children
                            in their need.
                        </h1>
                        <p data-aos="fade-up-right" data-aos-easing="linear"
                           data-aos-duration="2000">
                            These are the goals for NYAGI in Tanzania.
                            We hope to increase the amount of traiges
                            and skilled medical providers for mothers as
                            well as lower neonatal deaths and stillbirths.
                        </p>
                        <label>
                            <span data-aos="zoom-in-down" data-aos-easing="linear"
                                  data-aos-duration="1000">
                               <h5> $800,00+</h5>
                                <h5>Raised in a year</h5>
                            </span>
                             <span data-aos="zoom-in-up" data-aos-easing="linear"
                                   data-aos-duration="1500">
                               <h5> 2000+</h5>
                                <h5>Team Member</h5>
                            </span>
                             <span data-aos="zoom-in-down" data-aos-easing="linear"
                                   data-aos-duration="2000">
                               <h5> 800+</h5>
                                <h5>Events Organized</h5>
                            </span>
                        </label>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Slider;