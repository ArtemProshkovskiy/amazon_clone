import { createSlice, nanoid } from '@reduxjs/toolkit';

const items =
  localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

const initialState = {
  shoppingCart: items,
};

function updateLocal(item) {
  localStorage.setItem("cartItems", JSON.stringify(item));
}

const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    shoppingCartAdd: (state, action) => {
      const newItem = { id: nanoid(), text: action.payload };

      // Check if an item with the same ID exists in the cart
      const existingItemIndex = state.shoppingCart.findIndex(item => item.text.id === newItem.text.id);

      if (existingItemIndex !== -1) {
        // If the item exists, update its quantity
        state.shoppingCart[existingItemIndex].text.counter += parseInt(newItem.text.counter);
      } else {
        // If the item doesn't exist, add it to the cart
        state.shoppingCart.push(newItem);
      }
      updateLocal(state.shoppingCart); // Update local storage here
    },

    ShoppingCartRemove: (state, action) => {
      const idToRemove = action.payload;

      // Use filter to create a new array without the specified item
      state.shoppingCart = state.shoppingCart.filter(item => item.id !== idToRemove);
      updateLocal(state.shoppingCart); // Update local storage here
    },
    updateQuantity: (state, action) => {
      const { itemId, quantity } = action.payload;
      const updatedCart = state.shoppingCart.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            text: {
              ...item.text,
              counter: quantity.toString(), // Update the quantity
            },
          };
        }
        return item;
      });
      state.shoppingCart = updatedCart;
      updateLocal(updatedCart); // Update local storage here
    },
  },
});

export const { shoppingCartAdd, ShoppingCartRemove, updateQuantity } = shoppingCartSlice.actions;
export default shoppingCartSlice;
