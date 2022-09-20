import { configureStore } from '@reduxjs/toolkit';
import orderReduser from '../features/order/order';
import cartReduser from '../features/cart/cart';
import productReduser from '../features/products/product';

export const store = configureStore({
  reducer: {
    order: orderReduser,
    cart: cartReduser,
    products: productReduser
  },
})