import { createBrowserRouter } from "react-router-dom";
import Error from "../Components/Error/Error";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import ServicesDetails from "../Components/ServiceDetails/ServicesDetails";
import Services from "../Components/Services/Services";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path:'/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/services-home')
            },
            {   
                path: "/services",
                element: <Services></Services>

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/service/:id',
                element: <ServicesDetails></ServicesDetails>,
                loader: ({params}) =>  fetch(`http://localhost:5000/services/${params.id}`),
            }
        ]
    }
])