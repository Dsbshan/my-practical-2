import { createSlice } from "@reduxjs/toolkit";

export const productBasicDetailsSlice = createSlice({
  name: "productBasicDetailsSlice",
  initialState: {
    productBasicDetails: {},
  },
  reducers: {
    storeProductBasicDetails: (state, action) => {
      console.log(action);
      state.productBasicDetails = action.payload;
    },
    resetProductBasicDetails: (state) => {
      state.productBasicDetails = {};
    },
  },
});
export const { storeProductBasicDetails, resetProductBasicDetails } =
  productBasicDetailsSlice.actions;

export default productBasicDetailsSlice.reducer;
