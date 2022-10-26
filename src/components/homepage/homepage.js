import "./homepage.scss";
import Navbar from "../Navbar/Navbar";
import NavbarSmall from "../Navbarsmall/NavbarSmall";

export default function homepage() {
    return (
        <section id="home">
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
