import React from 'react';
import amazonLogo from '../../images/amazon.png';
import SearchIcon from '@mui/icons-material/Search';

function Header(props) {
    return (
        <header className="header">
            <div className="header__logo">
                <img src={amazonLogo} alt="Amazon Logo"/>
            </div>
            <div className="header__location">
                <span>Deliver to:</span>
                <strong>United Kingdom</strong>
            </div>
            <div className="header__search">
                <input type="text" placeholder="Search..."/>
                <button>
                    <SearchIcon/>
                </button>
            </div>
            <div className="header__nav">
                <div className="header__nav-item">
                    <span>Hello, Sign in</span>
                    <strong>Account & Lists</strong>
                </div>
                <div className="header__nav-item">
                    <span>Returns</span>
                    <strong>& Orders</strong>
                </div>
                <div className="header__nav-item">
                    <span>Your</span>
                    <strong>Prime</strong>
                </div>
                <div className="header__nav-item">
                    <strong>Cart</strong>
                </div>
            </div>
        </header>
    );
}

export default Header;