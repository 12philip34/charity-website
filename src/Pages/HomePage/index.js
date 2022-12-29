import React from 'react'
import style from './style.module.css'
import Slider from "../../Components/IntroSection";
import CharityVideoSection from "../../Components/CharityVideoSection";
import HelpRender from "../../Components/HelpRender";
import ImportantRender from "../../Components/ImportantRender";
import JoinUs from "../../Components/JoinUs";

const HomePage = () => {

    return (
        <div className={style.homeCss}>
            <Slider />
            <CharityVideoSection />
            <HelpRender />
            <ImportantRender />
            <JoinUs />
        </div>
    )
}
export default HomePage;