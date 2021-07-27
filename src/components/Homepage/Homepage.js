import "./homepage.scss";
import { Splide, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/splide/dist/css/themes/splide-default.min.css';
// import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';

const Homepage = () => {
    let options = {
        height: '85vh',
        width: '100%',
        // type: 'loop',
        autoplay: false,
        speed: 1500,
        arrows: true,
        easing: 'ease',
        // interval: 6000,
        drag: true,
        pagination: false,
        keyboard: false
      }
    return (
        <section id="home">
            <Splide
             options={options}
             hasSliderWrapper
            >
                <SplideSlide>
                    <div className="front-logo">
                        <img
                            src="images/podcast-logo.png"
                            alt="logo"
                        />
                    </div>
                </SplideSlide>
                {/* <div className="arrow">
                <a href="/">
                    <img src="images/arrow-right.svg" className="arrow-right"
                        alt="arrow"
                    />
                </a>
                <a href="/">
                    <img src="images/arrow-left.svg" className="arrow-left"
                        alt="arrow"
                    />
                </a>
            </div> */}

                {/* <img src="image1.jpg" alt="Image 1" /> */}

                <SplideSlide>
                    {/* <img src="image2.jpg" alt="Image 2" /> */}
                </SplideSlide>
            </Splide>
        </section>
    );
}

export default Homepage;