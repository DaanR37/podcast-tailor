import React from 'react'
import "./productpage.scss";
import { Link } from "react-router-dom";
import AudioPlayer from './Audioplayer/AudioPlayer';
import AudioPlayerJoey from './Audioplayerjoey/AudioPlayerJoey';
import AudioPlayerIda from './Audioplayerida/AudioPlayerIda';

export default function Productpage() {
    return (
        <section id="product-page">
            <div className="lineaal">
                <img
                    src="images/liniaal.svg"
                    alt="lineaal"
                />
            </div>
            <nav className="nav-container-podcasts">
                <ul className="buttons-left-podcasts">
                    <li><a href="#home" className="button-home-left">Home</a></li>
                </ul>
                <ul className="buttons-mid-right-podcasts">
                    <li><button className="button-home-middle-podcasts">Voorbeelden</button></li>
                    <li>
                        <button className="button-aanvraag-podcasts" data-tf-slider="QInKKEpl" data-tf-width="550">
                            Doe een aanvraag
                        </button>
                    </li>
                </ul>
            </nav>

            <div className="product-cards-container">
                <div className="button-small">
                    <img
                        src="images/Deborah-Card.png"
                        alt="pakket een"
                    />
                    <div className="audio-player-debby">
                        <AudioPlayer />
                    </div>
                </div>
                <div className="button-medium">
                    <img
                        src="images/Joey-Card.png"
                        alt="pakket twee"
                    />
                    <div className="audio-player-joey">
                        <AudioPlayerJoey />
                    </div>
                </div>
                <div className="button-large">
                    <img
                        src="images/Ida-Card.png"
                        alt="pakket een"
                    />
                    <div className="audio-player-ida">
                        <AudioPlayerIda />
                    </div>
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
                                href="https://www.instagram.com/podcast_tailor/"
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
