import { createBrowserRouter } from "react-router-dom";
import AllDetailsService from "../component/AllDetailsService/AllDetailsService";
import DetailsService from "../component/DetailsService/DetailsService";
import Error from "../component/Error/Error";
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
        errorElement: <Error />,
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
                loader: () => fetch('https://server-site-reviw-website.vercel.app/allservices'),
                element: <Services />
            },
            {
                path: '/DetailsService/:id',
                element: <PriveteRoute><DetailsService /></PriveteRoute>,
                loader: ({ params }) => fetch(`https://server-site-reviw-website-farhan-sharif.vercel.app/services/${params.id}`)
            },
            {
                path: '/AllDetailsService/:id',
                element: <PriveteRoute><AllDetailsService /></PriveteRoute>,
                loader: ({ params }) => fetch(`https://server-site-reviw-website-farhan-sharif.vercel.app/allservices/${params.id}`)
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