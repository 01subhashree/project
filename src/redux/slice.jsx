import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: [],
};

export const FormSlice = createSlice({
  name: "formData",
  initialState,
  reducers: {
    addFormData: (state, action) => {
      console.log(action);
      state.formData.push(action.payload); // Push to the formData array
    },
    deleteFormData: (state, action) => {
      const name = action.payload;
      state.formData = state.formData.filter((ele) => ele.name !== name); // Update the formData array
    },
    // updateFormData: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const { addFormData, deleteFormData } = FormSlice.actions;

export default FormSlice.reducer;
