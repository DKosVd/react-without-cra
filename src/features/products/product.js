import { createSlice } from "@reduxjs/toolkit";
import products from "../../mock-data/products";

const initialState = {
    products: products,
    product: null
};

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getProducts: (state, action) => {
        },
        getProductById:(state, action) => {
            state.product = state.products.filter( product => product._id === action.payload).pop();
        },
        setProducts:(state, action) => {

        }
    }
})

export const { getProducts, getProductById, setProducts } = productSlice.actions;

export default productSlice.reducer;