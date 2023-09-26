import React from 'react';
import Products from '../../data/products.json';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Autoplay} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

function BestSellers(props) {
    const productsArray = Object.values(Products);

    return (
        <div>
            <Swiper
                navigation={true}
                modules={[Navigation, Autoplay]}
                autoplay={{
                    delay: 4500,
                }}
                pagination={{clickable: true}}
            >
                {productsArray.map((product) => (
                    <SwiperSlide key={product.id}>
                        <img src={require(product.image)} alt={product.title}/>
                        {product.image}

                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default BestSellers;
