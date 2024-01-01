import { configureStore } from "@reduxjs/toolkit";
import authReducer from './features/authSlice'
import { TypedUseSelectorHook, useSelector } from "react-redux";
export const store = configureStore({
    reducer: {
        authReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// import { configureStore } from "@reduxjs/toolkit"

// export const makeStore = () => {
//     return configureStore({
//         reducer: {}
//     })
// }

// export type AppStore = ReturnType<typeof makeStore>
// export type RootState = ReturnType<AppStore['getState']>
// export type AppDispatch = AppStore['dispatch']