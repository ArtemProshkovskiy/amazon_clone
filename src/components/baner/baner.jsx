import React, {useState} from 'react';
import CloseIcon from '@mui/icons-material/Close';

function Banner(props) {
    const [isBannerVisible, setBannerVisibility] = useState(true);

    function hideBanner() {
        setBannerVisibility(false);
    }

    return (
        isBannerVisible ? (
            <div className='max-w-[1300px] mx-auto mt-4 p-4'>
                <div className='relative'>
                    <div className='absolute right-4 top-4 cursor-pointer'>
                        <CloseIcon onClick={hideBanner} className='text-gray-600 hover:text-gray-800'/>
                    </div>
                    <img src={require('../../images/banner_image.jpg')} alt='' className='w-full'/>
                </div>
            </div>
        ) : (
            <div className='pt-4'>

            </div>

        )
    );
}

export default Banner;
