import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import MainPage from "./pages/mainPage";
import ProductPage from "./pages/productPage";
import ShoppingCart from "./pages/shoppingCart";
import { store } from "./globalState/state";
import './index.css';
import { createRoot } from 'react-dom/client';
import NotFoundPage from './pages/NotFoundPage'

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage></MainPage>
    },
    {
        path: '/product/:id',
        element: <ProductPage></ProductPage>
    },
    {
        path: '/shopping-cart',
        element: <ShoppingCart></ShoppingCart>
    },
    {
        path: '*',
        element: <NotFoundPage></NotFoundPage>
    }
]);

const root = createRoot(document.getElementById('root')); // Use createRoot
root.render(
  <Provider store={store}>
    <RouterProvider store={store} router={router}></RouterProvider>
  </Provider>
);
