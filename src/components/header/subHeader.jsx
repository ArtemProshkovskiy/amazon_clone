import React from 'react';

function SubHeader(props) {
    return (
        <div className='bg-light_blue'>
            <div className='sub_header flex  max-w-[1300px] mx-auto text-amber-50 font-medium pt-1.5 pb-1.5'>
                <a className='ml-3 '>Today's Deals</a>
                <a className='ml-3' href="">Customer Service</a>
                <a className='ml-3' href="">Registry</a>
                <a className='ml-3' href="">Gift Cards</a>
                <a className='ml-3' href="">Sell</a>
            </div>
        </div>
    );
}

export default SubHeader;