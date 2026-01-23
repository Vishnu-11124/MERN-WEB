import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { dummyDataApi } from './service/dummyData'

export const store = configureStore({
    reducer: {
        [dummyDataApi.reducerPath]: dummyDataApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dummyDataApi.middleware),
})

setupListeners(store.dispatch)