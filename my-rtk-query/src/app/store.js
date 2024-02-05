import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./features/services/dummyData";
import { setupListeners } from "@reduxjs/toolkit/query"

const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer
    },
    middleware: (getDefaultMiddlewares)=> {
        return getDefaultMiddlewares().concat(productsApi.middleware)
    }
})

setupListeners(store.dispatch)

export default store;