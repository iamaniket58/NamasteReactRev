import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
    { console.log('Header is getting rendered') }
    let btnName = "Login";
    let [btnNameReact, setBtnNameReact] = useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_URL} alt="logo" width="100px" />
            </div>
            <div className="nav-items">
                <ul >
                    <Link to="/" className="li">Home</Link>
                    <Link to="/about" className="li">About</Link>
                    <Link to="/contact" className="li">Contact Us</Link>
                    <Link to="/" className="li">Cart</Link>
                    <button className="login" onClick={() => {
                        setBtnNameReact(btnNameReact == "Login" ? "LogOut" : "Login")
                    }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header;