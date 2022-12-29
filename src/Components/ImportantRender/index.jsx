import React from 'react'
import style from './style.module.css'
import ImportantProps from "../../Props/ImportantProps";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

const ImportantRender = (props) => {

    return (
        <div>
          <section className={style.importantBox}>
              <small>feature causes</small>
              <h1>Most of the poor childern get help by your donation</h1>
              <p className={style.importantText}>
                  These are the goals for NYAGI in Tanzania.
                  We hope to increase the amount of traiges and
                  skilled medical providers for mothers.
              </p>
             <div className={style.cardContainer}>
                 <ImportantProps
                     Icon={<AutoStoriesIcon />}
                     Header='Quality Education'
                     Paragraph='We are trying to ensure quality education for poor children'
                     Button='Donate Now'
                 />
                 <ImportantProps
                     Icon={<AutoStoriesIcon />}
                     Header='Quality Education'
                     Paragraph='We are trying to ensure quality education for poor children'
                     Button='Donate Now'
                 />
                 <ImportantProps
                     Icon={<AutoStoriesIcon />}
                     Header='Quality Education'
                     Paragraph='We are trying to ensure quality education for poor children'
                     Button='Donate Now'
                 />
                 <ImportantProps
                     Icon={<AutoStoriesIcon />}
                     Header='Quality Education'
                     Paragraph='We are trying to ensure quality education for poor children'
                     Button='Donate Now'
                 />
                 <ImportantProps
                     Icon={<AutoStoriesIcon />}
                     Header='Quality Education'
                     Paragraph='We are trying to ensure quality education for poor children'
                     Button='Donate Now'
                 />
                 <ImportantProps
                     Icon={<AutoStoriesIcon />}
                     Header='Quality Education'
                     Paragraph='We are trying to ensure quality education for poor children'
                     Button='Donate Now'
                 />
             </div>
          </section>
        </div>
    )
}

export default ImportantRender;