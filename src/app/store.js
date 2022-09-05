import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../features/transection/filterSlice";
import transactionReducer from "../features/transection/transactionSlice";

export const store = configureStore({
  reducer: {
    transaction: transactionReducer,
    filters: filterReducer,
  },
});
