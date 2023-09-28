import { createSlice, nanoid } from '@reduxjs/toolkit';


const initialState = {
    shoppingCart: [],
};

export const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState,
    reducers: {
        shoppingCartAdd: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            };

            // Ensure immutability by returning a new state object
            return {
                ...state,
                shoppingCart: [...state.shoppingCart, todo],
            };
        },
        ShoppingCartRemove: (state, action) => {
            const idToRemove = action.payload;

            // Use filter to create a new array without the specified to-do item
            const newTodos = state.shoppingCart.filter(todo => todo.id !== idToRemove);

            // Ensure immutability by returning a new state object
            return {
                ...state,
                shoppingCart: newTodos,
            };
        },
    },
});

export const {shoppingCartAdd, ShoppingCartRemove} = shoppingCartSlice.actions;
