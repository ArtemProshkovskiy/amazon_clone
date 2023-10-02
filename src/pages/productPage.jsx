import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Products from '../data/products.json';
import StarRatings from "react-star-ratings/build/star-ratings";
import Header from "../components/header/header";
import {useDispatch} from 'react-redux';
import {shoppingCartAdd} from '../features/shoppingCart/shoppingCartSlice'; // Replace './shoppingCartSlice' with the actual path to your slice file.


function ProductPage(props) {
    const [product, setProduct] = useState({});
    const [selectedValue, setSelectedValue] = useState("1");

  // Handle changes in the select input
  const handleSelectChange = (event) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
  };
    const {id} = useParams();

    useEffect(() => {
        // Find the product with the matching id from the Products JSON
        const foundProduct = Products[id];

        // Check if a product was found
        if (foundProduct) {
            setProduct(foundProduct);
        }
    }, [id]);

    const dispatch = useDispatch();

    function addToCart() {
        const data = {
            name: product.title,
            image: product.image,
            attribute: product.attribute,
            counter: selectedValue
        }
        dispatch(shoppingCartAdd(data))
    }

    return (
        <div className='bg-background h-full min-h-[100vh]'>
            <Header></Header>
            {product.id !== undefined ? (
                <div className='flex max-w-[1300px] mx-auto justify-center'>
                    <div className='bg-white p-8 mr-16 mt-7 max-w-[300px]'>
                        <img src={require(`../${product.image}`)} alt=""/>
                    </div>

                    <div className='max-w-[600px] bg-white p-4 mr-16 mt-7 flex flex-col'>
                        <div className='author font-bold text-xl mb-1'>{product.title}</div>
                        <div className='flex font-normal  mb-1'>
                            <span className='mr-1'>by </span>
                            <span className='text-blue-500'>{product.brand}</span>
                        </div>
                        <div className='flex items-center mb-5'>
                            <StarRatings
                                rating={product.avgRating}
                                starRatedColor="#FEBD69"
                                starSpacing='2px'
                                svgIconPath='m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z'
                                numberOfStars={5}
                                name='rating'
                                starDimension='23px'
                            ></StarRatings>
                            <span className='ml-5 text-blue-500 font-normal'>{product.ratings} ratings</span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='font-bold mb-1'>Paperback</span>
                            {product.badge === 'choice' ? (
                                <span
                                    className='w-[115px] text-xs xl:text-sm bg-slate-800 text-white p-1'>Amazon's <span
                                    className='text-orange-500'>Choice</span></span>
                            ) : (<span className='w-[120px] text-xs xl:text-sm bg-red-500 text-white p-1'>Limited Time Deal</span>)}
                        </div>
                        <p className='border-t pt-1 mt-3 text-black border-black text-lg'>{product.description}</p>
                    </div>

                    <div className='bg-white mt-5 p-4 max-w-[400px]'>
                        <div className='flex justify-end text-right mb-3'>
                            <div><span className='font-medium text-xl text-red-900'>£{product.price}</span><br></br>
                                <span className='font-medium text-xl text-gray-600'>RRP: <span
                                    className='line-through'>£{product.oldPrice}</span></span>
                            </div>
                        </div>
                        <span className='text-blue-500 font-normal m-1'>FREE Returns</span><br></br>
                        <span className='text-blue-500 font-normal m-1'>FREE Delivery</span><br></br>
                        <span className='text-green-700 font-normal m-2'>In Stock</span>
                        <div className='flex items-center mb-2 text-left'>
                            <span className='text-base xl:text-lg'>Quantity:</span>
                            <select className='p-2 bg-white border rounded-md focus:border-indigo-600' value={selectedValue} // Set the selected value from state
        onChange={handleSelectChange}>
                                <option value="1" className="option">1</option>
                                <option value="2" className="option">2</option>
                                <option value="3" className="option">3</option>
                            </select>
                        </div>
                        <button onClick={() => addToCart()} className='btn mt-4 text-center'>Add to Cart</button>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default ProductPage;
