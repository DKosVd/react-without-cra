import { createSlice } from "@reduxjs/toolkit";
import products from "../../mock-data/products";
import { sortAlpha, sortNumber } from "../../utils/comparator";

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

        },
        sortElementByType:(state, action) => {
            const copyProducts = [...state.products];
            if(action.payload === "name") {
                state.products = copyProducts.sort(sortAlpha)
            } else {
                state.products = copyProducts.sort(sortNumber(action.payload))
            }
            
        }, 
    }
})

export const { getProducts, getProductById, setProducts, sortElementByType } = productSlice.actions;

export default productSlice.reducer;