import { configureStore } from "@reduxjs/toolkit";
import cart from "../Redux/Slice/AddtoCartSlice";
export const store = configureStore({
  reducer: {
    Cart: cart,
  },
});
