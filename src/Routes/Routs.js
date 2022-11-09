import { createBrowserRouter } from "react-router-dom";
import AddService from "../Components/AddService/AddService";
import Blog from "../Components/Blog/Blog";
import Error from "../Components/Error/Error";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import MyReviews from "../Components/MyReviews/MyReviews";
import Register from "../Components/Register/Register";
import ServicesDetails from "../Components/ServiceDetails/ServicesDetails";
import Services from "../Components/Services/Services";
import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

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
                path: "/blog",
                element: <Blog></Blog>

            },
            {   
                path: "/add-services",
                element: <PrivateRoute><AddService></AddService></PrivateRoute>,

            },
            {   
                path: "/my-reviews",
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>,

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
                element: <PrivateRoute><ServicesDetails></ServicesDetails></PrivateRoute>,
                loader: ({params}) =>  fetch(`http://localhost:5000/services/${params.id}`),
            }
        ]
    }
])