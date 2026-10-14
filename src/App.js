import React from "react"
import ReactDOM from "react-dom/client"
import "../index.css"
import Header from "./components/Header" //import Header from "./components/Header.js"
import Body from "./components/Body"


const AppLayout = () => {
    return (
        
        <div className="app-layout">
            {console.log('App Layout is getting rendered')}
            <Header />
            <Body />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />)