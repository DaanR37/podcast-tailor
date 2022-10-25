import { StyledBurger } from './Style';

export default function Burger({ open, setOpen }) {
    return (
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </StyledBurger>
    );
}