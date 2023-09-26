import React from 'react';
import Header from "../components/header/header";
import SubHeader from "../components/header/subHeader";
import ImageSlider from "../components/swiper/swiper";
import Products from "../components/products/Products";
import BestSellers from "../components/bestSellers/bestSellers";

function MainPage(props) {
    return (
        <div className='main_page bg-gray-200 h-full'>
            <Header></Header>
            <SubHeader></SubHeader>
            <ImageSlider></ImageSlider>
            <Products></Products>
            <BestSellers></BestSellers>
        </div>
    );
}

export default MainPage;
