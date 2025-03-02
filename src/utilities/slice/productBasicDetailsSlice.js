import {createSlice} from "@reduxjs/toolkit";


export const productBasicDetailsSlice = createSlice({
    name: 'productBasicDetailsSlice',
    initialState: {
        productBasicDetails: {},


    },
    reducers :{
       storeProductBasicDetails:(state, action) => {
           console.log(action);
           state.productBasicDetails = action.payload;
       }
    }
})
export const {storeProductBasicDetails} =productBasicDetailsSlice.actions;

export default  productBasicDetailsSlice.reducer;