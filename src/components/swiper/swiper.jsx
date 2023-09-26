import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Autoplay} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

function ImageSlider() {
    const images = [
        {img: require('../../images/carousel_1.jpg')},
        {img: require('../../images/carousel_2.jpg')},
        {img: require('../../images/carousel_3.jpg')},
        {img: require('../../images/carousel_4.jpg')},
        {img: require('../../images/carousel_5.jpg')},
        {img: require('../../images/carousel_vid.mp4')},
    ];

    return (
        <div className='h-[600px] max-w-[1300px] mx-auto z-30 '>
            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                navigation={true}
                modules={[Navigation, Autoplay]} // Enable Navigation and Autoplay modules
                autoplay={{
                    delay: 4500,
                }}
                pagination={{clickable: true}}
                className='h-[50%]'
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index} className=""> {/* Centering container */}
    {image.img.endsWith('.mp4') ? (
        <video className='w-full h-full object-cover' controls>
            <source src={image.img} type="video/mp4"/>
        </video>
    ) : (
        <img className='w-full' src={image.img} alt={`Slide ${index + 1}`}/>
    )}
</SwiperSlide>

                ))}
            </Swiper>
            <div className="h-[50%] bg-gradient-to-b from-stone-900"></div>
        </div>

    );
}

export default ImageSlider;
