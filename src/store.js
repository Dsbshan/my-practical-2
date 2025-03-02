import {configureStore} from "@reduxjs/toolkit";
import productDetailsReducer from './utilities/slice/productBasicDetailsSlice.js'

export default  configureStore({
    reducer: {
        productDetails: productDetailsReducer

    }
})