import React from 'react';
import amazonLogo from '../../images/amazon.png';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from "react-router-dom";


function Header(props) {
    return (
        <div className='bg-defoult'>
            <div className=' max-w-[1300px] mx-auto'>
                <header className=" text-white flex items-center m-auto justify-between p-2">
                    <div className="header__logo mr-2">
                        <Link to='/'>
                            <img src={amazonLogo} alt="Amazon Logo" className="w-24"/>
                        </Link>
                    </div>
                    <div className="header__location flex flex-col mr-4">
                        <span>Deliver to:</span>
                        <strong>United Kingdom</strong>
                    </div>
                    <div className="header__search bg-white rounded-md flex items-center p-2 mr-2">
                        <input type="text" placeholder="Search..."
                               className="border-none text-black outline-none w-96 p-2"/>
                        <button
                            className="bg-amber-400 bg-yellow-400 text-black rounded-md p-2 cursor-pointer ml-2"> {/* Adjusted margin */}
                            <SearchIcon></SearchIcon>
                        </button>
                    </div>
                    <div className=" mr-4 flex flex-col">
                        <span className=' mb-1'>Hello, Sign in</span>
                        <strong>Account & Lists</strong>
                    </div>
                    <div className="header__nav-item mr-2  flex flex-col">
                        <span className=' mb-1'>Returns</span>
                        <strong>& Orders</strong>
                    </div>
                    <div className="header__nav-item mr-2  flex flex-col">
                        <span className=' mb-1'>Your</span>
                        <strong>Prime</strong>
                    </div>
                    <div className="header__nav-item mr-2 relative z-0">
                        <ShoppingCartIcon fontSize="large"></ShoppingCartIcon>
                        <span className='text-black absolute top-0 left-3.5 font-bold text-amber-500'>0</span>
                    </div>
                </header>
            </div>
        </div>
    );
}

export default Header;
