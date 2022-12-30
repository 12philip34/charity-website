import React from 'react';
import style from './style.module.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import logo from'../../Images/A-removebg-preview.png'


const Footer = () => {
    const FaceBook ={
        color: '#3856C7FF'
    }
    const Twitter ={
        color: '#148ff1'
    }
    const Instagram ={
        color: '#ea4621'
    }
    const Youtube ={
        color: '#e00c44'
    }

    return (
    <div>
        <section className={style.footerBox}>
            <div data-aos="fade-right"
                 data-aos-offset="100"
                 data-aos-easing="ease-in-sine" className={style.columnOne}>
                <img src={logo} alt=""/>
                <p>
                    These are the goals for NYAGI in Tanzania.
                    We hope to increase the amount of traiges
                    and skilled medical providers for mothers as
                    well as lower neonatal deaths and stillbirths.
                </p>
                <h5>Connect via Social Media</h5>
                <span>
                    <i><FacebookIcon style={FaceBook} /></i>
                    <i><TwitterIcon style={Twitter} /></i>
                    <i><InstagramIcon style={Instagram} /></i>
                    <i><YouTubeIcon style={Youtube} /></i>

                </span>
            </div>
            <div data-aos="fade-right"
                 data-aos-offset="200"
                 data-aos-easing="ease-in-sine" className={style.columnTwo}>
                <h2>menu</h2>
                <a href='/'>home</a>
                <a href='/donation'>donation</a>
                <a href='/blog'>category</a>
                <a href='/event'>feature</a>
            </div>
            <div data-aos="fade-right"
                 data-aos-offset="300"
                 data-aos-easing="ease-in-sine" className={style.columnThree}>
                <h2>category</h2>
                <a href='#'>medical aid</a>
                <a href='#'>quality education</a>
                <a href='#'>healthy food</a>
                <a href='#'>develop skills</a>
            </div>
            <div data-aos="fade-right"
                 data-aos-offset="200"
                 data-aos-easing="ease-in-sine" className={style.columnFour}>
                <h2>about us</h2>
                <a href='#'>who we are</a>
                <a href='#'>whats our mission</a>
                <a href='#'>source of fund</a>
                <a href='#'>testimonals</a>
            </div>
            <div data-aos="fade-right"
                 data-aos-offset="100"
                 data-aos-easing="ease-in-sine" className={style.columnFive}>
                <h2>newsletters</h2>
                <p>
                    Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Libero, odit.</p>
                <input type="text" placeholder='Enter Email'/>
                <button className={style.footerBtn}>Donate Now</button>
            </div>
        </section>
    </div>
    );
};

export default Footer;