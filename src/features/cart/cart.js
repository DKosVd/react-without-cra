import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
   products: {},
   total: 0
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addElementToCart:(state, action) => {
            if(!state.products.hasOwnProperty(action.payload._id)) {
                const prepareForMap = {...action.payload, count: 1};
                state.products[`${action.payload._id}`] = prepareForMap;
            } else {
                state.products[`${action.payload._id}`].count+=1;
            }
        },
        deleteElementFromCart: (state, action) => {
            const id = action.payload;
            if((state.products[id].count - 1) > 0) {
                state.products[id].count -=1;
            } else {
                delete state.products[id];
            }
        }
    }
})

export const totalPrice = createSelector(
    (state) => state.cart.products,
    (items, _) => {
        let total = 0;
        for(let id in items) {
            const item = items[id];
            total += item.price * item.count;
        }
        return total.toFixed(2);
    }
)

export const totalElement = createSelector(
    (state) => state.cart.products,
    (items, _) => {
        let total = 0;
        for(let id in items) {
            const item = items[id];
            total += item.count;
        }
        return total;
    }
)

export const { addElementToCart, deleteElementFromCart } = cartSlice.actions;

export default cartSlice.reducer;