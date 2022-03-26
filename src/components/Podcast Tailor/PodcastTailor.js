import React from 'react'
import "./podcasttailor.scss";
import { Helmet } from 'react-helmet'


export default function PodcastTailor() {
    return (
        <section id="podcast-tailor">
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
            <nav className="nav-container-uitleg">
                <ul className="buttons-left-uitleg">
                    <li><a href="#home" className="button-home-left">Home</a></li>
                    <li><a href="#product-page" className="button-podcast-uitleg">De Podcasts</a></li>
                </ul>
                <ul className="buttons-mid-right-uitleg">
                    <li><button className="button-home-middle-uitleg">wat is de podcast tailor?</button></li>
                    <li>
                        <button className="button-aanvraag-uitleg" data-tf-slider="QInKKEpl" data-tf-width="550">
                            Doe een aanvraag
                        </button>
                    </li>
                </ul>
            </nav>

            <div className="uitleg-tekst">
                <h3>Met de <b>Podcast Tailor</b> maken wij <b>podcasts op maat</b>.
                    <br></br>
                    We leggen altijd <b>persoonlijke verhalen</b> vast die je terug
                    <br></br>
                    kunt luisteren, <b>waar en wanneer</b> je maar wilt.
                    <br></br>
                    <br></br>
                    Een <b>dierbaar cadeau</b> voor een <b>broer of zus</b> die
                    <br></br>
                    dertig wordt, een goede <b>vriend of vriendin</b> die naar het
                    <br></br>
                    buitenland verhuist of om de <b>levensverhalen</b> van
                    <br></br>
                    je <b>opa of oma</b> voorgoed vast te leggen.
                    <br></br>
                    <br></br>
                    De <b>prijs</b> voor een podcast op maat begint vanaf <b>850 euro</b>.
                    <br></br>
                    Doe een <b>aanvraag</b> en <b>kom langs</b> bij ons in de studio!
                </h3>
            </div>

            <div className="aanvraag-knop">
                <button data-tf-slider="QInKKEpl" data-tf-width="550">
                    <img
                        src="images/Aanvraag-button.png"
                        alt="doe aanvraag"
                    />
                </button>
            </div>

            {/* <div className="uitleg-tekst">
                <img
                    src="images/uitleg-tekst-nieuw.png"
                    alt="uitleg tekst"
                />
            </div> */}

            {/* <div className="stappenplan">
                <img
                    src="images/uitleg-stappenplan.png"
                    alt="stappenplan"
                />
            </div> */}

            {/* <div className="steps-container">
                <ul>

                    <li>
                        <div className="content">
                            <button> */}
            {/* <div className="content-overlay"></div> */}
            {/* <img
                                    className="content-image"
                                    src="images/uitleg-1.png"
                                    alt="step one"
                                />
                                <div className="content-details fadeIn-bottom">
                                    <img
                                        className="content-title"
                                        src="images/uitleg-tekst-1.png"
                                        alt="tekst ballon een"
                                    />
                                </div>
                            </button>
                        </div>
                    </li> */}

            {/* <li>
                        <div className="content">
                            <button>
                                <img
                                    src="images/uitleg-2.png"
                                    alt="step two"
                                />
                                <div className="content-details fadeIn-bottom">
                                    <img
                                        src="images/uitleg-tekst-2.png"
                                        alt="tekst ballon twee"
                                    />
                                </div>
                            </button>
                        </div>
                    </li> */}

            {/* <li>
                        <div className="content">
                            <button>
                                <img
                                    src="images/uitleg-3.png"
                                    alt="step three"
                                />
                                <div className="content-details fadeIn-bottom">
                                    <img
                                        src="images/uitleg-tekst-3.png"
                                        alt="tekst ballon drie"
                                    />
                                </div>
                            </button>
                        </div>
                    </li> */}

            {/* <li>
                        <div className="content">
                            <button>
                                <img
                                    src="images/uitleg-4.png"
                                    alt="step four"
                                />
                                <div className="content-details fadeIn-bottom">
                                    <img
                                        src="images/uitleg-tekst-4.png"
                                        alt="tekst ballon vier"
                                    />
                                </div>
                            </button>
                        </div>
                    </li> */}

            {/* <li>
                        <div className="content">
                            <button>
                                <img
                                    src="images/uitleg-5.png"
                                    alt="step five"
                                />
                                <div className="content-details fadeIn-bottom">
                                    <img
                                        src="images/uitleg-tekst-5.png"
                                        alt="tekst ballon vijf"
                                    />
                                </div>
                            </button>
                        </div>
                    </li>
                </ul> */}
            {/* </div> */}
            <a href="#product-page" alt="product pagina">
                <div className="arrow-down-tailor">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40">
                        <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
                    </svg>
                </div>
                <div className="uitleg-tailor">
                    <h3>Voorbeelden</h3>
                </div>
            </a>
        </section>
    )
}
