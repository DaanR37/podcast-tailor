import "./homepage.scss";
import Navbar from "../Navbar/Navbar";
import NavbarSmall from "../Navbarsmall/NavbarSmall";
// import { Helmet } from 'react-helmet'

export default function HomePage() {
    return (
        <section id="home">
            {/* <Helmet>
                <title>Podcast Tailor - podcasts op maat</title>
                <meta name="description" content="Geef een podcast cadeau aan iemand die u dierbaar is, 
        vul het aanvraag formulier in en wij nemen contact met u op. 
        Of start een Whatsapp gesprek door op het icoontje te klikken" />
            </Helmet> */}
            <div className="navbar-bigg-homepage">
                <Navbar />
            </div>
            <div className="navbar-small-homepage">
                <NavbarSmall />
            </div>

            <div className="lineaal">
                <img
                    src="images/lineaal-zwart-wit.svg"
                    alt="lineaal"
                />
            </div>

            <div className="container-logo">
                <div className="front-logo">
                    <img
                        src="images/podcast-tailor-logo.gif"
                        alt="logo"
                    />
                </div>

                <div className="podcast-buttons">
                    <button>
                        <a href="#persoonlijke-podcasts" alt="persoonlijke podcasts" className="button-persoonlijk">
                            <h3>persoonlijke podcasts</h3>
                        </a>
                    </button>
                    <button>
                        <a href="#zakelijke-podcasts" alt="zakelijke podcasts" className="button-zakelijk">
                            <h3>zakelijke podcasts</h3>
                        </a>
                    </button>
                </div>
            </div>
        </section>
    );
}