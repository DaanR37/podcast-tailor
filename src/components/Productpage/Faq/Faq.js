import React from 'react'
import "./faq.scss";

export default function Faq() {
    return (
        <section id="faq-page">
            <div className="faq-tekst">
                <img src="images/Tekst-FAQ.png"
                    alt="tekst veelgestelde vragen"
                />
            </div>
            <a href="/#product-page">
                <div className="times">
                    <img src="images/times-circle-regular.svg" alt="times" />
                </div>
            </a>
        </section>
    )
}
