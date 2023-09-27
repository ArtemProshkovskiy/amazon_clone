import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

function Baner(props) {
  const [Banner, ShowBanner] = useState(true);

  function display_None() {
    ShowBanner(false);
  }

  return (
    Banner ? (
      <div className='baner_ad max-w-[1300px] mx-auto mt-4'>
        <div className='relative'>
          <div className='absolute right-[15px] top-[15px] cursor-pointer'>
            <CloseIcon onClick={display_None}></CloseIcon>
          </div>
          <img src={require('../../images/banner_image.jpg')} alt="" />
        </div>
      </div>
    ) : (<div className='text-center text-black font-bold'>ad was closed</div>)
  );
}
export default Baner;