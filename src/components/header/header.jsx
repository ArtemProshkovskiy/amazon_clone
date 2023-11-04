import React, {useState} from 'react';
import amazonLogo from '../../images/amazon.png';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import products from '../../data/products.json'
import Suggestions from './sagestions';


function Header(props) {


    function searchProducts(query) {
        query = query.toLowerCase(); // Convert query to lowercase for case-insensitive search
        const suggestions = [];

        for (const key in products) {
            const product = products[key];
            if (product.title.toLowerCase().includes(query)) {
                suggestions.push(product);
            }
        }

        return suggestions;
    }

    const [search, setSearch] = useState('');
    const shoppingCart = useSelector((state) => state.shoppingCartSlice);

    console.log(search)



    return (
        <div id='header' className='bg-defoult'>
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
                        <div className="relative bg-background">
                            <select
                                name="topic"
                                id="topic"
                                defaultValue="all"
                                className="w-auto appearance-none border-none text-black outline-none p-2 pr-6 rounded-md min-w-[5rem] sm:min-w-[6rem] max-w-[20rem]"
                            >
                                <option value="all">All</option>
                                <option value="Science">Science</option>
                                <option value="Technology">Technology</option>
                                <option value="Travel">Travel</option>
                                <option value="Food and Cooking">Food and Cooking</option>
                                <option value="Music">Music</option>
                                <option value="Sports">Sports</option>
                                <option value="Movies">Movies</option>
                                <option value="Literature">Literature</option>
                                <option value="History">History</option>
                                <option value="Art and Design">Art and Design</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                                <span className="text-black text-4xl">▾</span>
                            </div>
                        </div>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="border-none text-black outline-none w-96 p-2"
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button
                            className="bg-amber-400 bg-yellow-400 text-black rounded-md p-2 cursor-pointer ml-2">
                            {/* Adjusted margin */}
                            <SearchIcon></SearchIcon>
                        </button>
                        <Suggestions sug={search} searchQuery={search}/>
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
                        <Link to='/shopping-cart'>
                            <ShoppingCartIcon fontSize="large"></ShoppingCartIcon>
                            <span
                                className='text-black absolute top-0 left-3.5 font-bold text-amber-500'>{shoppingCart.shoppingCart.length}</span>
                        </Link>
                    </div>
                </header>
            </div>
        </div>
    );
}

export default Header;
