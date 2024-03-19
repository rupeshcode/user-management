// cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WishListItem {
  id: number;
  name: string;
  price: number;
}

interface WishListState {
  wishlist: WishListItem[];
}

const initialState: WishListState = {
  wishlist: [],
};

export const wishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addtowishList: (state, action: PayloadAction<WishListItem>) => {
      state.wishlist.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload
      );
    },
    // clearCart: (state) => {
    //   state.items = [];
    // },
  },
});

export const { addtowishList, removeItem } = wishListSlice.actions;

export default wishListSlice.reducer;
