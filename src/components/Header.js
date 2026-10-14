import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {
    { console.log('Header is getting rendered') }
    let btnName = "Login";
    let [btnNameReact,setBtnNameReact] = useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_URL} alt="logo" width="100px" />
            </div>
            <div className="nav-items">
                <ul >
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login" onClick={() => {
                        setBtnNameReact(btnNameReact=="Login"?"LogOut":"Login")
                    }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header;