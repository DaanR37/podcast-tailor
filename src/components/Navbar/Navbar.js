import "./navbar.scss";

const Navbar = () => {
    return (
        <nav className="nav-container">
            <ul className="buttons-left">
                <li><a href="/" className="button-home-left">Home</a></li>
                <li><a href="#product-page" className="button-podcast">De Podcasts</a></li>
            </ul>
            <ul className="buttons-mid-right">
                <li><a href="#" className="button-home-middle">Home</a></li>
                <li>
                    <button className="button-aanvraag" data-tf-slider="QInKKEpl" data-tf-width="550">
                        Doe een aanvraag
                    </button>
                </li>
                {/* <li><a href="/" className="button-aanvraag">Doe een aanvraag</a></li> */}
            </ul>
        </nav>
    );
}

export default Navbar;