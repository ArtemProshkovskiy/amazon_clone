// NotFoundPage.js
import React from 'react';
import BackToTop from "../components/footer/BackToTop";
import Footer from "../components/footer/footer";

function NotFoundPage(props) {
    return (
        <div>
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="text-4xl font-bold mb-4">404</div>
                <div className="text-lg mb-4">We couldn't find the page you're looking for.</div>
                <button className="bg-amazon-yellow text-white font-semibold py-2 px-4 rounded-full">
                    <a href="/">Go back to Amazon.com</a>
                </button>
            </div>
            <BackToTop></BackToTop>
            <Footer></Footer>
        </div>
    );
}

export default NotFoundPage;
