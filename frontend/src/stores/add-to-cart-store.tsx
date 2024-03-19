import { configureStore } from "@reduxjs/toolkit";
import cart from "../Redux/Slice/AddtoCartSlice";
import wishList from "../Redux/Slice/AddtoWishList";
export const store = configureStore({
  reducer: {
    Cart: cart,
    WishList: wishList,
  },
});
