import "./persoonlijkepodcasts.scss";
import Navbar from "../Navbar/Navbar";
import NavbarSmall from "../Navbarsmall/NavbarSmall";
import AudioPlayer from "./Audioplayer/AudioPlayer";

export default function PersoonlijkePodcasts() {
    return (
        <section id="persoonlijke-podcasts">
            <div className="navbar-bigg-persoonlijke-podcasts">
                <Navbar />
            </div>
            <div className="navbar-small-persoonlijke-podcasts">
                <NavbarSmall />
            </div>
            <div className="lineaal">
                <img
                    src="images/lineaal-zwart-wit.svg"
                    alt="lineaal"
                />
            </div>

            <div className="container-persoonlijk">
                <h1>
                    persoonlijke podcasts
                </h1>
                <h3>Bij Podcast Tailor maken wij podcasts op maat.
                    <br></br>
                    Ons ervaren team legt op een zorgvuldige manier verhalen
                    vast die je altijd en overal terug kunt luisteren.
                    <br></br>
                    <br></br>
                    Een dierbaar cadeau voor een broer die
                    <br></br>
                    dertig wordt of een goede vriendin die naar het
                    <br></br>
                    buitenland verhuist. Het is ook een manier om de levensverhalen
                    <br></br>
                    van je vader, moeder, opa of oma vast te leggen.
                    <br></br>
                    <br></br>
                    Doe een aanvraag en kom langs bij ons in de studio. Indien gewenst
                    kunnen we ook bij jou op locatie opnemen.
                </h3>

                <div className="audio-player">
                    <AudioPlayer />
                    <img
                        src="images/stippel-lijn.svg"
                        alt="stippellijn"
                        className="stippellijn"
                    />
                </div>

                <p>Luister hier naar een compilatie.</p>

                <button data-tf-slider="QInKKEpl" data-tf-width="550" className="aanvraag-button-persoonlijk">
                    <h1>doe een aanvraag</h1>
                </button>

            </div>
        </section>
    )
}
