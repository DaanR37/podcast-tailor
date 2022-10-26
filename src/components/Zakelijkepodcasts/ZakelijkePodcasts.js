import "./zakelijkepodcasts.scss";
import Navbar from "../Navbar/Navbar";
import NavbarSmall from "../Navbarsmall/NavbarSmall";

export default function ZakelijkePodcasts() {
    return (
        <section id="zakelijke-podcasts">
            <div className="navbar-bigg-zakelijke-podcasts">
                <Navbar />
            </div>
            <div className="navbar-small-zakelijke-podcasts">
                <NavbarSmall />
            </div>
            <div className="lineaal">
                <img
                    src="images/lineaal-zwart-wit.svg"
                    alt="lineaal"
                />
            </div>

            <div className="container-zakelijk">
                <h1>
                    zakelijke podcasts
                </h1>
                <h3>
                    Podcast voor je bedrijf of organisatie laten maken?
                    <br /><br />
                    Of het nou voor je medewerkers, je klanten of om nieuw publiek aan te boren is:
                    Podcast Tailor maakt het voor je.
                </h3>
                <img src="images/icon-format.svg" alt="format" />
                <h3>We denken graag mee over het perfecte format.</h3>
                <img src="images/icon-microphone.svg" alt="microphone" />
                <h3>We hebben een professionele studio en we kunnen goed opnemen op locatie.</h3>
                <img src="images/icon-montage.svg" alt="montage" />
                <h3>We geloven in de magie van strakke montage.</h3>
                <img src="images/icon-on-air.svg" alt="on air" />
                <h3>We publiceren de podcast. Intern en/of op streamingdiensten als Spotify en Apple Podcast.</h3>

                <button data-tf-slider="QInKKEpl" data-tf-width="550" className="aanvraag-button-zakelijk">
                    <h1>doe een aanvraag</h1>
                </button>

                <p><i>Voor de volgende klanten maken wij podcasts:</i></p>
                <img src="images/banner-klanten.png" alt="klanten banner" />

            </div>
        </section>
    )
}
