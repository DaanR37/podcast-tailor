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
                    <li><a href="#product-page" className="button-podcast">De Podcasts</a></li>
                </ul>
                <ul className="buttons-mid-right-uitleg">
                    <li><a href="/" className="button-home-middle-uitleg">wat is de podcast tailor?</a></li>
                    <li>
                        <button className="button-aanvraag-uitleg" data-tf-slider="QInKKEpl" data-tf-width="550">
                            Doe een aanvraag
                        </button>
                    </li>
                    {/* <li><a href="/" className="button-aanvraag-uitleg">Doe een aanvraag</a></li> */}
                </ul>
            </nav>
            <div className="uitleg-tekst">
                <img
                    src="images/uitleg-tekst.png"
                    alt="uitleg tekst"
                />
            </div>
            <div className="stappenplan">
                <img
                    src="images/uitleg-stappenplan.png"
                    alt="stappenplan"
                />
            </div>

            <div className="steps-container">
                <ul>

                    <li>
                        <div className="content">
                            <a href="/">
                                {/* <div className="content-overlay"></div> */}
                                <img
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
                            </a>
                        </div>
                    </li>

                    <li>
                        <div className="content">
                            <a href="/">
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
                            </a>
                        </div>
                    </li>

                    <li>
                        <div className="content">
                            <a href="/">
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
                            </a>
                        </div>
                    </li>

                    <li>
                        <div className="content">
                            <a href="/">
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
                            </a>
                        </div>
                    </li>

                    <li>
                        <div className="content">
                            <a href="/">
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
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
            <a href="#product-page" alt="product pagina">
                <div className="arrow-down">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40">
                        <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
                    </svg>
                </div>
                <div className="uitleg">
                    <h3>de podcasts</h3>
                </div>
            </a>
        </section>
    )
}
