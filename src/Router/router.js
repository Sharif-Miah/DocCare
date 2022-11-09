import { createBrowserRouter } from "react-router-dom";
import FAQ from "../component/FAQ/FAQ";
import Hero from "../component/Hero/Hero";
import Home from "../component/Home/Home";
import Login from "../component/Login/Login";
import PriveteRoute from "../component/PriveteRoute/PriveteRoute";
import Register from "../component/Register/Register";
import Services from "../component/Services/Services";
import ThreeService from "../component/ThreeService/ThreeService";
import Main from "../layout/Main";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/services',
                loader: () => fetch('http://localhost:5000/allservices'),
                element: <Services />
            },
            {
                path: '/faq',
                element: <FAQ />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }

        ]
    }
])

export default routes;