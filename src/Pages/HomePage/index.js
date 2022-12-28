import React from 'react'
import Slider from "../../Components/IntroSection";
import CharityVideoSection from "../../Components/CharityVideoSection";
import HelpRender from "../../Components/HelpRender";
import ImportantProps from "../../Props/ImportantProps";

const HomePage = () => {

    return (
        <div>
            <Slider />
            <CharityVideoSection />
            <HelpRender />
        </div>
    )
}
export default HomePage;