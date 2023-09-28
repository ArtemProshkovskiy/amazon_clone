import { configureStore, combineReducers } from "@reduxjs/toolkit";
import shoppingCartSlice from "../features/shoppingCart/shoppingCartSlice";
// Combine your reducers
const rootReducer = combineReducers({
  ShoppingCartccc: shoppingCartSlice.reducer, // Use the same name as the export
});


export const store = configureStore({
  reducer: rootReducer,
});