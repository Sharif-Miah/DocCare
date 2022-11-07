import { createBrowserRouter } from "react-router-dom";
import FAQ from "../component/FAQ/FAQ";
import Hero from "../component/Hero/Hero";
import Login from "../component/Login/Login";
import Register from "../component/Register/Register";
import Main from "../layout/Main";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Hero />
            },
            {
                path: '/home',
                element: <Hero />
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