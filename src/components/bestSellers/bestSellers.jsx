import React from 'react';
import Products from '../../data/products.json'; // Adjust the path to your JSON file
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Autoplay} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import {Link} from "react-router-dom";


function BestSellers(props) {
    const productsArray = Object.values(Products).slice(0, 9); // Get the first 9 elements based on their id


      const customNavigationStyles = {
        nextEl: '.swiper-button-next', // Selector for the next button
        prevEl: '.swiper-button-prev', // Selector for the previous button
    };

    return (
        <div className='max-w-[1300px] mx-auto pl-4 pr-4 '>
            <Swiper
                className='bg-white pt-4 pb-4'
                navigation={customNavigationStyles}
                modules={[Navigation, Autoplay]}
                slidesPerView={7}
                spaceBetween={10}
            >
                <div className="swiper-button-next rounded-full text-gray-700 cursor-pointer"></div>
                <div className="swiper-button-prev rounded-full text-gray-700 cursor-pointer"></div>

                {productsArray.map((product) => (
                    <SwiperSlide key={product.id} className=''>
                        <Link to={`/product/${product.id}`}>
                            <img src={require('../../' + product.image_small)} className='h-52' alt={product.title} />
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default BestSellers;