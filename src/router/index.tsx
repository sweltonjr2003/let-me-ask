import React from 'react'

import { createBrowserRouter } from "react-router-dom";

import App from '../App'
import Home from '../pages/Home';

export const router = createBrowserRouter([
    {
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Home/>
            }
        ]
    }
])