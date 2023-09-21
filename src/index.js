import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';
import MainPage from "./pages/mainPage";
import ProductPage from "./pages/productPage";
import ShoppingCart from "./pages/shoppingCart";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage></MainPage>
    },
    {
        path: '/product',
        element: <ProductPage></ProductPage>
    }, {

        path: '/shopping-cart',
        element: <ShoppingCart></ShoppingCart>
    },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}>
        <App/>
    </RouterProvider>
);
