import "./homepage.scss";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';
import { Helmet } from 'react-helmet'
// import { motion } from 'framer-motion';

const Homepage = () => {
    let options = {
        start: 1,
        height: '85vh',
        width: '100%',
        type: 'loop',
        autoplay: false,
        speed: 1000,
        arrows: true,
        easing: 'ease',
        // interval: 6000,
        drag: true,
        pagination: false,
        keyboard: false
    }

    return (
        <section id="home">
            <Helmet>
                <title>Podcast Tailor - podcasts op maat</title>
                <meta name="description" content="Geef een podcast cadeau aan iemand die u dierbaar is, 
                vul het aanvraag formulier in en wij nemen contact met u op. 
                Of start een Whatsapp gesprek door op het icoontje te klikken" />
            </Helmet>
            <div className="lineaal">
                <img
                    src="images/liniaal.svg"
                    alt="lineaal"
                />
            </div>
            <Splide
                options={options}
                hasSliderWrapper
            >
                <SplideSlide>
                    {/* <div className="foto-container"> */}
                    {/* <div className="boys-pics"> */}

                    <div className="content">
                        <button className="btn-julius">
                            <img
                                src="images/Julius.png" className="foto-julius"
                                alt="foto julius"
                            />
                        </button>

                        <div className="content-details-two fadeIn-bottom-two">
                            <img
                                src="images/Julius-Tekst.png"
                                alt="tekst"
                            />
                        </div>
                    </div>

                    {/* <a href="#open-modal">
                        <button className="btn-julius">
                            <img
                                src="images/Julius.png" className="foto-julius"
                                alt="foto julius"
                            />
                        </button>
                    </a>

                    <div id="open-modal" className="modal-window">
                        <div>
                            <div className="modal-close">
                                <a href="#modal-close" title="Close">
                                    <img
                                        src="images/times-circle.svg"
                                        alt="times"
                                    />
                                </a>
                            </div>
                            <div>
                                <img
                                    src="images/Julius-Tekst.png"
                                    alt="tekst"
                                />
                            </div>
                        </div>
                    </div> */}

                    {/* </div> */}
                    {/* </div> */}

                    <div className="contact-ons-links">
                        <h3>contact ons</h3>
                    </div>
                    <div className="home-arrow">
                        <h3>home</h3>
                    </div>

                </SplideSlide>
                <SplideSlide>
                    <div className="front-logo">
                        <img
                            src="images/Podcast-Tailor.gif"
                            alt="logo"
                        />
                    </div>

                    <div className="contact-ons">
                        <h3>contact ons</h3>
                    </div>

                    <div className="makers">
                        <h3>de maker</h3>
                    </div>

                </SplideSlide>

                <SplideSlide>
                    <div className="contact-card">
                        <img
                            src="images/Contact-2.png"
                            alt="contact card"
                        />
                        <div className="contact-links">
                            <ul>
                                <li><a href="mailto:info@podcast-tailor.nl" target="_blank" rel="noreferrer">info@podcast-tailor.nl</a></li>

                                <li><a href="tel:0681476083" target="_blank" rel="noreferrer">+31681476083</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="makers-rechts">
                        <h3>de maker</h3>
                    </div>
                    <div className="home-arrow-links">
                        <h3>home</h3>
                    </div>

                </SplideSlide>
            </Splide>

            <a href="#podcast-tailor" alt="uitleg podcasts">
                <div className="arrow-down">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40">
                        <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
                    </svg>
                </div>
                <div className="uitleg">
                    <h3>wat is de podcast tailor?</h3>
                </div>
            </a>
        </section>
    );
}

export default Homepage;