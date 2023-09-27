import React from 'react';
import Products from '../../data/products.json'; // Adjust the path to your JSON file
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Autoplay} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Link } from "react-router-dom";


function BestSellers(props) {
    const productsArray = Object.values(Products);
    return (
        <div className='max-w-[1300px] mx-auto pl-4 pr-4'>
            <Swiper className='bg-white p'
                    navigation={true}
                    modules={[Navigation, Autoplay]}
                    slidesPerView='7' // Display one slide at a time
                    spaceBetween={10}
            >
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