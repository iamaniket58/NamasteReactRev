import React from "react"
import ReactDOM from "react-dom/client"
import "../index.css"
import Header from "./components/Header" //import Header from "./components/Header.js"
import Body from "./components/Body"
import About from "./components/About"
import Contact from "./components/Contact"
import ErrorPage from "./components/Error"
import { createBrowserRouter,RouterProvider } from "react-router-dom"


const AppLayout = () => {
    return (

        <div className="app-layout">
            {console.log('App Layout is getting rendered')}
            <Header />
            <Body />
        </div>
    )
}
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement:<ErrorPage/>
    },
    {
        path: "/about",
        element: <About />
    } ,
    {
        path: "/contact",
        element: <Contact />
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />)