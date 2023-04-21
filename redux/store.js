import { configureStore } from '@reduxjs/toolkit';
import { menuItemsReducer } from '../features/cart/cartSlice';

export const store = configureStore({
      reducer: {
            menuItems: menuItemsReducer
      }
});