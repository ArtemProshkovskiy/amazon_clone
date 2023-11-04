import React from 'react';
import Header from "../components/header/header";
import SubHeader from "../components/header/subHeader";
import ImageSlider from "../components/swiper/swiper";
import Products from "../components/products/Products";
import BestSellers from "../components/bestSellers/bestSellers";
import Category from "../components/category/category";
import Baner from "../components/baner/baner";
import Footer from "../components/footer/footer";
import BackToTop from "../components/footer/BackToTop";

function MainPage(props) {
    return (
        <div className='main_page bg-gray-200 h-full min-h-[100vh] flex flex-col'>
            <Header></Header>
            <SubHeader></SubHeader>
            <ImageSlider></ImageSlider>
            <Products></Products>
            <BestSellers></BestSellers>
            <Category></Category>
            <Baner></Baner>
            <Footer></Footer>
        </div>
    );
}

export default MainPage;
