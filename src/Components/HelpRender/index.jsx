import React from 'react'
import style from './style.module.css'
import HelpProps from "../../Props/HelpProps";
import help1 from '../../Images/cha2.jpg'
import help2 from '../../Images/cha3.jpg'
import help3 from '../../Images/cha4.jpg'


const HelpRender = (props) => {

    return (
        <div className={style.helpBox}>
            <small>feature causes</small>
            <h1>Most of the poor childern get help by your donation</h1>
            <div className={style.cardBox}>

            <HelpProps
                CardImage={help1}
                Cardtext='Emergency campaign for medical treatment'
                Goals='$10,000'
                Raised='$3,000'
                Togo='$5000'
                Button='Donate Now'
            />
            <HelpProps
                CardImage={help2}
                Cardtext='Emergency campaign for medical treatment'
                Goals='$10,000'
                Raised='$3,000'
                Togo='$5000'
                Button='Donate Now'
            />
            <HelpProps
                CardImage={help3}
                Cardtext='Emergency campaign for medical treatment'
                Goals='$10,000'
                Raised='$3,000'
                Togo='$5000'
                Button='Donate Now'
            />
            </div>
        </div>
    )
}

export default HelpRender;
