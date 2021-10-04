import React from 'react'
import "./productpage.scss";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

export default function Productpage() {
    return (
        <section id="product-page">
            <div className="lineaal">
                <img
                    src="images/liniaal.svg"
                    alt="lineaal"
                />
            </div>
            <div>
                <nav className="nav-container-podcasts">
                    <ul className="buttons-left-podcasts">
                        <li><a href="#home" className="button-home-left">Home</a></li>
                    </ul>
                    <ul className="buttons-mid-right-podcasts">
                        <li><button className="button-home-middle-podcasts">de podcasts</button></li>
                        <li>
                            <button className="button-aanvraag-podcasts" data-tf-slider="QInKKEpl" data-tf-width="550">
                                Doe een aanvraag
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="product-cards-container">
                <motion.button
                    whileHover={{
                        scale: 1.1,
                        // originX: 0,
                        textShadow: "0px 0px 2px rgb(255,255,255)"
                    }}
                    transition={{ type: 'spring', stiffness: 100 }}
                >
                    <img
                        src="images/Pakket-S.png"
                        alt="pakket een"
                    />
                </motion.button>

                <motion.button
                    whileHover={{
                        scale: 1.1,
                        // originX: 0,
                        textShadow: "0px 0px 2px rgb(255,255,255)"
                    }}
                    transition={{ type: 'spring', stiffness: 100 }}
                >
                    <img
                        src="images/Pakket-M.png"
                        alt="pakket twee"
                    />
                </motion.button>

                <motion.button
                    whileHover={{
                        scale: 1.1,
                        // originX: 0.6,
                        textShadow: "0px 0px 2px rgb(255,255,255)"
                    }}
                    transition={{ type: 'spring', stiffness: 100 }}
                >
                    <img
                        src="images/Pakket-L.png"
                        alt="pakket een"
                    />
                </motion.button>

                <div className="aanvraag-knop">
                    <motion.button data-tf-slider="QInKKEpl" data-tf-width="550"
                        whileHover={{
                            scale: 1.1,
                            // originX: 0.6,
                            textShadow: "0px 0px 2px rgb(255,255,255)"
                        }}
                        transition={{ type: 'spring', stiffness: 100 }}
                    >
                        <img
                            src="images/Doe Aanvraag.png"
                            alt="doe aanvraag"
                        />
                    </motion.button>
                </div>
            </div>
            <footer className="footer-container">
                <div className="footer">
                    <p>© 2021 Front-Labs. All Rights Reserved.</p>
                </div>
                <div className="faq-button">
                    <Link to="/Faq">
                        <p className="FAQ">Veelgestelde vragen</p>
                    </Link>
                </div>
                <div className="contact-buttons">
                    <ul>
                        <li>
                            <a
                                href="/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src="images/instagram.svg" alt="instagram" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://wa.me/+31681476083"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src="images/whatsapp.svg" alt="whatsapp" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://goo.gl/maps/AFnGUzM7BgBCJ5EV9"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src="images/location.svg" alt="location" />
                            </a>
                        </li>
                    </ul>
                </div>
                <a href="#home">
                    <div className="arrow-top">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </a>
            </footer>
        </section>
    )
}
