import React,{lazy, Suspense} from "react"
import ReactDOM from "react-dom/client"
import "../index.css"
import Header from "./components/Header" //import Header from "./components/Header.js"
import Body from "./components/Body"
// import About from "./components/About"
import Contact from "./components/Contact"
import ErrorPage from "./components/Error"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import RestaurantMenu from "./components/RestaurantMenu"
// import Grocery from "./components/Grocery"

const Grocery=lazy(()=>import("./components/Grocery"));
const About=lazy(()=>import("./components/About"))
const AppLayout = () => {
    return (

        <div className="app-layout">
            {console.log('App Layout is getting rendered')}
            <Header />
            <Outlet />
        </div>
    )
//     return (
//     <div className="min-h-screen bg-gray-900 flex items-center justify-center">
//       <h1 className="text-4xl font-bold text-green-400">
//         Tailwind is working!
//       </h1>
//     </div>
//   );
}
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/grocery",
                element:<Suspense fallback={<h1>Fallback</h1>}> <Grocery /></Suspense> 
            },
            {
                path: "/about",
                element:<Suspense fallback={<h1>Loading</h1>}> <About /></Suspense> 
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "restaurants/:resid",
                element: <RestaurantMenu />
            }
        ],
        errorElement: <ErrorPage />
    }

])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />)