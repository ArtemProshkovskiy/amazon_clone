import React from 'react';
import Products from '../../data/products.json'; // Adjust the path to your JSON file
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Autoplay} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import {nanoid} from "@reduxjs/toolkit";

function Category(props) {
    const category = [
        {img: require('../../images/category_0.jpg'), id: nanoid()},
        {img: require('../../images/category_1.jpg'), id: nanoid()},
        {img: require('../../images/category_2.jpg'), id: nanoid()},
        {img: require('../../images/category_3.jpg'), id: nanoid()},
        {img: require('../../images/category_4.jpg'), id: nanoid()},
        {img: require('../../images/category_5.jpg'), id: nanoid()},
    ]
    return (
        <div className='max-w-[1300px] mx-auto pl-4 pr-4 mt-8'>
            <Swiper className='bg-white p'
                    navigation={true}
                    modules={[Navigation, Autoplay]}
                    slidesPerView='5' // Display one slide at a time
                    spaceBetween={10}
            >
                {category.map(item => (
                      <SwiperSlide key={item.id} className=''>
                    <img src={item.img} className='h-52' alt={item.id}/>
                </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Category;