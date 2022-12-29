import React from 'react'
import style from './style.module.css'
import ImportantProps from "../../Props/ImportantProps";
// import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import SchoolIcon from '@mui/icons-material/School';
import OpacityIcon from '@mui/icons-material/Opacity';
import HomeIcon from '@mui/icons-material/Home';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';
import PsychologyIcon from '@mui/icons-material/Psychology';

const ImportantRender = (props) => {

    return (
        <div>
          <section className={style.importantBox}>
              <small data-aos="fade-zoom-in"
                     data-aos-easing="ease-in-back"
                     data-aos-delay="100"
                     data-aos-offset="0">feature causes</small>
              <h1 data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="200"
                  data-aos-offset="0">Most of the poor childern get help by your donation</h1>
              <p data-aos="fade-zoom-in"
                 data-aos-easing="ease-in-back"
                 data-aos-delay="300"
                 data-aos-offset="0" className={style.importantText}>
                  These are the goals for NYAGI in Tanzania.
                  We hope to increase the amount of traiges and
                  skilled medical providers for mothers.
              </p>
             <div className={style.cardContainer}>
                 <ImportantProps
                     Icon={<HealthAndSafetyIcon />}
                     Header='Medical Aid Project'
                     Paragraph='We are trying to ensure quality education for poor children'
                     Button='Donate Now'
                 />
                 <ImportantProps
                     Icon={<SchoolIcon />}
                     Header='Quality Education'
                     Paragraph='We are trying to ensure quality education for poor children'
                     Button='Donate Now'
                 />
                 <ImportantProps
                     Icon={<OpacityIcon />}
                     Header='Clean Water'
                     Paragraph='We are trying to ensure quality education for poor children'
                     Button='Donate Now'
                 />
                 <ImportantProps
                     Icon={<HomeIcon />}
                     Header='Accomodation'
                     Paragraph='We are trying to ensure quality education for poor children'
                     Button='Donate Now'
                 />
                 <ImportantProps
                     Icon={<EmojiFoodBeverageIcon />}
                     Header='Healthy Food'
                     Paragraph='We are trying to ensure quality education for poor children'
                     Button='Donate Now'
                 />
                 <ImportantProps
                     Icon={<PsychologyIcon />}
                     Header='develop skill'
                     Paragraph='We are trying to ensure quality education for poor children'
                     Button='Donate Now'
                 />
             </div>
          </section>
        </div>
    )
}

export default ImportantRender;