import { MENUITEMS } from "../../shared/menuitems.js";
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
      menuItemsArray: MENUITEMS
};

const menuItemsSlice = createSlice({
      name: 'menu items',
      initialState,
      reducers: {
            incrementQuantity: (state, action) => {
                  console.log('incrementQuantity action.payload:', action.payload);
                  console.log('incrementQuantity state.menuItemsArray:', state.menuItemsArray);

                  const replace = {
                        ...action.payload,
                        quantity: action.payload.quantity + 1
                  };
                  state.menuItemsArray[action.payload.id] = replace;

            },
            decrementQuantity: (state, action) => {
                  console.log('decrementQuantity action.payload:', action.payload);
                  console.log('decrementQuantity state.menuItemsArray:', state.menuItemsArray);

                  const replace = {
                        ...action.payload,
                        quantity: action.payload.quantity - 1
                  };
                  state.menuItemsArray[action.payload.id] = replace;
            }
      }
});

export const menuItemsReducer = menuItemsSlice.reducer;

export const { incrementQuantity, decrementQuantity } = menuItemsSlice.actions;

export const selectAllMenuItems = (state) => {
      return state.menuItems.menuItemsArray;
};

export const selectMenuItemById = (id) => (state) => {
      return state.menuItems.menuItemsArray.find(
            (menuItem) => menuItem.id === parseInt(id)
      );
};

export const selectMenuItemByQuantity = (state) => {
      return state.menuItems.menuItemsArray.filter(function (item) {
            return item.quantity > 0
      });
};