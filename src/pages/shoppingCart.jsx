import React, {useState} from 'react';
import Header from '../components/header/header';
import {useSelector, useDispatch} from 'react-redux';
import {ShoppingCartRemove, updateQuantity} from '../features/shoppingCart/shoppingCartSlice';
import BackToTop from "../components/footer/BackToTop";
import Footer from "../components/footer/footer";

function ShoppingCart(props) {
    const shoppingCart = useSelector((state) => state.shoppingCartSlice);
    const dispatch = useDispatch();

    // Create a state variable to store quantities for each item
    const [itemQuantities, setItemQuantities] = useState(
        shoppingCart.shoppingCart.reduce((quantities, item) => {
            quantities[item.id] = parseInt(item.text.counter);
            return quantities;
        }, {})
    );

    // Function to handle incrementing the quantity
    const incrementQuantity = (itemId) => {
        setItemQuantities((prevQuantities) => {
            const newQuantity = prevQuantities[itemId] + 1;
            // Dispatch the updateQuantity action to update Redux state
            dispatch(updateQuantity({itemId, quantity: newQuantity}));
            return {
                ...prevQuantities,
                [itemId]: newQuantity,
            };
        });
    };

    // Function to handle decrementing the quantity
    const decrementQuantity = (itemId) => {
        if (itemQuantities[itemId] > 1) {
            setItemQuantities((prevQuantities) => {
                const newQuantity = prevQuantities[itemId] - 1;
                // Dispatch the updateQuantity action to update Redux state
                dispatch(updateQuantity({itemId, quantity: newQuantity}));
                return {
                    ...prevQuantities,
                    [itemId]: newQuantity,
                };
            });
        }
    };


// Calculate the subtotal
    function calculateSubtotal(shoppingCart) {
        if (!Array.isArray(shoppingCart)) {
            return 0; // Return 0 if shoppingCart is not an array
        }

        return shoppingCart.reduce((total, item) => {
            const itemPrice = parseFloat(item.text.price);
            const itemQuantity = parseInt(item.text.counter);

            return total + itemPrice * itemQuantity;
        }, 0);
    }


// Usage in your component
    const subtotal = calculateSubtotal(shoppingCart.shoppingCart);

    return (
        <div className="bg-background min-h-[100vh] flex flex-col">
            <Header/>
            <div className='flex justify-center'>
                <div className="mt-10 flex max-w-[1300px] w-full">
                    <div className=" w-[70%] bg-white pb-8 max-h-[100%]">
                        <h1 className="text-2xl xl:text-3xl m-4">Shopping Cart</h1>
                        {shoppingCart.shoppingCart.map((item) => (
                            <div className="pr-4" key={item.id}>
                                <div className='flex'>
                                    <div>
                                        <img
                                            className="p-4 w-[250px]"
                                            src={require(`../${item.text.image}`)}
                                            alt=""
                                        />
                                    </div>
                                    <div className="border-t-2 border-black flex mt-4 justify-between w-full">
                                        <div className='mr-auto'>
                                            <p className="text-xl xl:text-2xl font-medium mb-1">
                                                {item.text.name}
                                            </p>
                                            <p className="text-sm xl:text-base mb-1">
                                                by <span className="text-blue-500">{item.text.brand}</span>
                                            </p>
                                            {item.text.badge === 'choice' ? (
                                                <span
                                                    className="w-[115px] text-xs xl:text-sm bg-slate-800 text-white p-1">
                                            Amazon's{' '}
                                                    <span className="text-orange-500">Choice</span>
                                        </span>
                                            ) : (
                                                <span
                                                    className="w-[120px] text-xs xl:text-sm bg-red-500 text-white p-1">
                                            Limited Time Deal
                                        </span>
                                            )}
                                            <div>
                                                <button
                                                    className="text-sm xl:text-base font-semibold rounded text-blue-500 mt-2 mb-1 cursor-pointer"
                                                    onClick={() => dispatch(ShoppingCartRemove(item.id))}
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                            <p className='mb-2'>{item.text.attribute}</p>
                                            <div className="counter">
                                                {/* Display the quantity and add increment/decrement buttons */}
                                                <div className="grid grid-cols-3 w-20 text-center">
                                                    <div
                                                        className="text-xl xl:text-2xl bg-gray-400 rounded cursor-pointer"
                                                        onClick={() => decrementQuantity(item.id)}
                                                    >
                                                        -
                                                    </div>
                                                    <div className="text-lg xl:text-xl bg-gray-200">
                                                        {itemQuantities[item.id]}
                                                    </div>
                                                    <div
                                                        className="text-xl xl:text-2xl bg-gray-400 rounded cursor-pointer"
                                                        onClick={() => incrementQuantity(item.id)}
                                                    >
                                                        +
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='text-right mt-4'>
                                        <span
                                            className='text-lg xl:text-xl mt-2 mr-4 font-semibold'>£{item.text.price}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <span className='ml-4 text-lg xl:text-xl text-right  mr-4  '>
  Subtotal ({shoppingCart.shoppingCart.length} items): <span className='font-semibold'>£{subtotal.toFixed(2)}</span>
</span>

                    </div>
                    <div
                        className="w-[30%] bg-white ml-[40px]  p-8 flex justify-center flex-col items-center max-h-[250px]">
                        <div className='text-xs xl:text-sm text-green-800 mb-4'>
                            Your order qualifies for <strong className='font-bold'>FREE DELIVERY</strong>. Delivery
                            Details
                        </div>
                        <div>
                                            <span className='text-lg xl:text-xl text-right mb-12 mr-4'>
  Subtotal ({shoppingCart.shoppingCart.length} items): <span className='font-semibold'>£{subtotal.toFixed(2)}</span>
</span>
                        </div>
                        <button className='btn mt-3'>Proceed to Checkout</button>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
}

export default ShoppingCart;
