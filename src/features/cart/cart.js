import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
   products: [],
   total: 0
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addElementToCart:(state, action) => {
            state.products.push(action.payload);
            state.total += action.payload.price;
        },
        deleteElementFromCart: (state, action) => {
            state.products = state.products.filter(id => id !== action.payload);
        }
    }
})

// export const totalPrice = createSelector(
//     (state) => state.cart.products,
//     (state) => state.products.products,
//     (items, products) => {
//         let total = 0;
//         for(let id in items) {
//             const idCartProduct = items[id];
//             const element = products.filter( ({_id}, idx) => _id === idCartProduct).pop();
//             total += element.price;
//         }
//         return total.toFixed(2);
//     }
//     )

export const { addElementToCart, deleteElementFromCart } = cartSlice.actions;

export default cartSlice.reducer;