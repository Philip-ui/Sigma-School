import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      // check if item is already in the cart
      const itemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        // if item exists in the cart, increment the amount
        state[itemIndex].amount += 1;
      } else {
        // if item does not exist in the cart, add it with amount: 1
        const newProduct = { ...action.payload, amount: 1 };
        console.log(newProduct);
        state.push(newProduct);
      }
    },
    deleteFromCart: (state, action) => {
      const itemId = action.payload; // Corrected: use action.payload as the item id

      const itemIndex = state.findIndex((item) => item.id === itemId);

      if (itemIndex >= 0) {
        if (state[itemIndex].amount > 1) {
          state[itemIndex].amount -= 1;
        } else {
          // If amount is 1, remove the item from the cart
          state.splice(itemIndex, 1);
        }
      }
    },
    updateCartItem: (state, action) => {
      const { itemId, newAmount } = action.payload;
      const itemIndex = state.findIndex((item) => item.id === itemId);

      if (itemIndex >= 0) {
        state[itemIndex].amount = newAmount;
      }
    },
  },
});

export const { addToCart, deleteFromCart, updateCartItem } = cartSlice.actions;

export default cartSlice.reducer;