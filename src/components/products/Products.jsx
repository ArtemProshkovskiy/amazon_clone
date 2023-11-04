import React from 'react';
import {nanoid} from '@reduxjs/toolkit';


function Products(props) {
    const home_grid = [
        {id: nanoid(), title: 'We have a surprise for you', img: require('../../images/home_grid_1.jpg')},
        {id: nanoid(), title: 'Watch The Rings of Power', img: require('../../images/home_grid_2.jpg')},
        {id: nanoid(), title: 'Unlimited Streaming', img: require('../../images/home_grid_3.jpg')},
        {id: nanoid(), title: 'More titles to explore', img: require('../../images/home_grid_4.jpg')},
        {id: nanoid(), title: 'Shop Pet Supplies', img: require('../../images/home_grid_5.jpg')},
        {id: nanoid(), title: 'Spring Sale', img: require('../../images/home_grid_6.jpg')},
        {id: nanoid(), title: 'Echo Buds', img: require('../../images/home_grid_7.jpg')},
        {id: nanoid(), title: 'Family Plan: 3 months free', img: require('../../images/home_grid_8.jpg')},

    ]
    return (
        <div className='max-w-[1300px] mx-auto flex justify-center -mt-72 z-40'>
             <div className=' flex justify-between flex-wrap center items-center'>
            {home_grid.map(item => (
                <div  key={item.id} className='cursor-pointer flex justify-between flex-col	 w-[280px] h-[370px]  mr-[20px] ml-[20px] p-[15px] mb-[30px] bg-white'>
                    <div className="title text-black font-bold">{item.title}</div>
                    <img src={item.img} alt=""/>
                    <a href="" className='text-blue-500 font-normal'>See more</a>
                </div>
            ))}
        </div>
        </div>
    );
}

export default Products;
