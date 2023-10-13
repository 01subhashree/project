import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./slice";

const store = configureStore({
  reducer: {
    formData: formReducer,
  },
});

export default store;
