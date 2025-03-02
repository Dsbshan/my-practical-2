import {combineReducers, configureStore} from "@reduxjs/toolkit";
import productDetailsReducer from './utilities/slice/productBasicDetailsSlice.js'
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore} from "redux-persist";
import {fakeBaseQuery} from "@reduxjs/toolkit/query";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['product']
}

const rootReducer=combineReducers({
product:productDetailsReducer
})


const persistedReducer = persistReducer(persistConfig, rootReducer)

const store=   configureStore({
    reducer: {
        productDetails: persistedReducer

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        })

})


const persistor = persistStore(store)

export {store, persistor};