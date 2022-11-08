import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../../layout/Main/Main';
import AddService from '../pages/AddService/AddService';
import Blogs from '../pages/Blogs/Blogs';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import PrivateRoute from '../pages/PrivateRoute/PrivateRoute';
import Register from '../pages/Register/Register';
import Reviews from '../pages/Reviews/Reviews';
import ServiceDetails from '../pages/Services/ServiceDetails';
import Services from '../pages/Services/Services';

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            errorElement: <ErrorPage></ErrorPage>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>,
                },
                {
                    path: 'services',
                    loader: () => fetch('http://localhost:5000/services')
                    ,
                    element: <Services></Services>,

                },
                {
                    path: 'blogs',
                    element: <Blogs></Blogs>
                },
                {
                    path: 'login',
                    element: <Login></Login>
                },
                {
                    path: 'register',
                    element: <Register></Register>
                },
                {
                    path: 'service/:id',
                    loader: ({ params }) =>
                        fetch(`http://localhost:5000/service/${params.id}`),
                    element: <ServiceDetails></ServiceDetails>
                },
                {
                    path: 'reviews',
                    element: <PrivateRoute><Reviews></Reviews></PrivateRoute>
                },
                {
                    path: 'addservice',
                    element: <AddService></AddService>
                },
            ]
        }
    ])
    return (
        <RouterProvider router={router}></RouterProvider>
    );
};

export default Routes;