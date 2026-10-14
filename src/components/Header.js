import { LOGO_URL } from "../utils/constants";
const Header = () => {
    {console.log('Header is getting rendered')}
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
                </ul>
            </div>
        </div>
    )
}
export default Header;