import { useState, useRef } from "react";
import Burger from "./Burger.js";
import Menu from "./Menu.js";
import { GlobalStyles } from "./Style.js";
import ClickToClose from "./ClickToClose.js";

import "./navbarsmall.scss";


export default function NavbarSmall() {
    const ref = useRef();
    const [open, setOpen] = useState(false);
    ClickToClose(ref, () => setOpen(false));

    return (
        <div ref={ref}>
            <GlobalStyles />
            <div id="menu">
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
            </div>
        </div>
    );
}
