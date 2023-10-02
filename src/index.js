import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Import the Provider
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import MainPage from "./pages/mainPage";
import ProductPage from "./pages/productPage";
import ShoppingCart from "./pages/shoppingCart";
import { store } from "./globalState/state";
import './index.css';

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
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}> {/* Wrap your app with Provider */}
    <RouterProvider store={store} router={router}></RouterProvider>
  </Provider>
);
