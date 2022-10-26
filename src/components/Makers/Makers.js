import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import NavbarSmall from "../Navbarsmall/NavbarSmall";
import "./makers.scss";

export default function Makers() {
    return (
        <section id="de-makers">
            <div className="navbar-bigg-makers">
                <Navbar />
            </div>
            <div className="navbar-small-makers">
                <NavbarSmall />
            </div>
            <div className="lineaal makers">
                <img
                    src="images/lineaal-zwart-wit.svg"
                    alt="lineaal"
                />
            </div>

            <div className="container-makers">
                <h2>de makers</h2>
                {/* <p>Wij maken podcasts voor jou op maat</p> */}
                <h1>julius van 't hek</h1>
                <h1>cecilia adorée</h1>
                <h1>olivier biggs</h1>
                <h1>ko van 't hek</h1>
                <h1>Frida Boeke</h1>
                <p>(Binnenkort meer over ons)</p>
            </div>

            <footer className="container-footer">

                <div className="contact-container">
                    <p>PODCAST TAILOR</p>
                    <a href="mailto:info@podcast-tailor.nl" target="_blank" rel="noreferrer">
                        <p><i>Email:</i> info@podcast-tailor.nl</p>
                    </a>
                    <a href="tel:0681476083" target="_blank" rel="noreferrer">
                        <p><i>Telefoon:</i> +31 (0)6 81 47 60 83</p>
                    </a>
                    <a href="https://g.page/tebbernekkel?share" target="_blank" rel="noreferrer">
                        <p><i>Adres:</i> Weteringschans 79, 1017RX A'dam</p>
                    </a>
                </div>

                <p className="footer">© 2022 Front-Labs. All Rights Reserved.
                    <i>Design by Joey Andela</i>
                </p>

                <div className="container-right-side">
                    <Link to="/faq" className="faq">
                        <p>Veelgestelde vragen</p>
                    </Link>

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
