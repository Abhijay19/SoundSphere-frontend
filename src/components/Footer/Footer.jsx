import "./Footer.scss";
import React from "react";
import {FaLocationArrow, FaMobileAlt, FaEnvelope} from 'react-icons/fa'
import Payment from '../../assets/payments.png'
const Footer = () => {
    let year = new Date().getFullYear();
    return (
    <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">
                Soundsphere is a React 18 based e-commerce platform which is developed to offer a true to life interface with interactive components, usage of Reach hooks and context API for dynamic nature of the website. Featuring mobile-first design and that is emphasized by the advanced SCSS concepts; the web application is pleasing to the eye, responsive and flexible in an optimal performance manner.
                </div>
            </div>
            <div className="col">
                <div className="title">Contact</div>
                <div className="c-items">
                    <FaLocationArrow />
                    <div className="text">1234 street</div>
                </div>
                <div className="c-items">
                    <FaMobileAlt />
                    <div className="text">123456789</div>
                </div>
                <div className="c-items">
                    <FaEnvelope />
                    <div className="text">abx@abc.com</div>
                </div>
            </div>
            <div className="col">
                <div className="title">Categories </div>
                <span className="text">Headphones</span>
                <span className="text">Smart Watches</span>
                <span className="text">Bluetooth Speakers</span>
                <span className="text">Wireless Earbuds</span>
                <span className="text">Home Theatre</span>
                <span className="text">Projectors</span>
            </div>
            <div className="col">
                <div className="title">Pages</div>
                <span className="text">Home</span>
                <span className="text">About</span>
                <span className="text">Privacy Policy</span>
                <span className="text">Returns</span>
                <span className="text">Terms and Conditions</span>
                <span className="text">Contact Us</span>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                    Abhijay Sekhar Choudhury @{year}. All Rights Reserved
                </div>
                <img src={Payment} />
            </div>
        </div>
    </footer>
    );
};

export default Footer;
