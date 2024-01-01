import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Socket } from "socket.io-client";

type InitialState = {
    value: AuthState
}

type AuthState = {
    isAuth: boolean,
    email: string,
    id: number,
    socket: Socket | null
}

const initialState = {
    value: {
        isAuth: false,
        email: "",
        id: 0,
        socket: null
    } as AuthState
} as InitialState

export const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: () => {
            return initialState
        },
        login: (state, action: PayloadAction<any>) => {
            console.log({action})
            return {
                value: {
                    isAuth: true,
                    email: action.payload?.email,
                    id: action.payload?.id,
                    socket: action.payload?.socket
                }
            }
        }
    }
})

export const { login, logout } = auth.actions
export default auth.reducer