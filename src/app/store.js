import { combineReducers, configureStore } from '@reduxjs/toolkit';
import orderReduser from '../features/order/order';
import cartReduser from '../features/cart/cart';
import productReduser from '../features/products/product';

const combinedReducer = combineReducers({
  order: orderReduser,
  cart: cartReduser,
  products: productReduser
})

const rootReducer = (state, action) => {
  if(action.type === 'order/resetState') {
    state = undefined;
  }
  return combinedReducer(state, action);
}

export const store = configureStore({
  reducer: rootReducer
})