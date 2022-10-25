import { StyledMenu } from './Style';

export default function Menu({ open, setOpen }) {
    return (
        <StyledMenu open={open} onClick={() => setOpen(!open)}>
            <a href="#persoonlijke-podcasts" alt="button">
                <h3>
                    persoonlijke podcasts
                </h3>
            </a>

            <a href="#zakelijke-podcasts" alt="button">
                <h3>
                    zakelijke podcasts
                </h3>
            </a>

            <a href="#de-makers" alt="button">
                <h3>
                    de makers
                </h3>
            </a>

            {/* <a href="/" alt="button">
                <h3>
                    doe een aanvraag
                </h3>
            </a> */}

        </StyledMenu>
    )
}
