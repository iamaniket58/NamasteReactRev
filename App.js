import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src="https://ts4.mm.bing.net/th?id=OIP.pmrlCtbaRdQCnwX_E4NHuQHaHa&pid=15.1" alt="logo" width="100px" />
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
const RestaurantCard = (props) => {
    return (
        <div className="res-card">

            <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1600,h_640,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2026/7/22/a07653c5-2981-4ee0-86e1-b4b0cc410b38_229.jpg" width="200px" />
            <h3>{props.resName}</h3>
            <h4> {props.cuisine}</h4>
            <h4>4.4 Star</h4>
            <h4>38 mins</h4>
        </div>
    )
}
// const css={
//     backgroundColor:"blue"
// }
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard resName="Meghna Biryani" cuisine="Birayani, North Indian"/>
                <RestaurantCard resName="Udupi" cuisine="South Indian"/>
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
            </div>
        </div>
    )
}
const AppLayout = () => {
    return (
        <div className="app-layout">
            <Header />
            <Body />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />)