import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";

export enum ERole {
	ADMIN = 'admin',
	USER = 'user'
}

export interface AuthState {
	isAuth: boolean;
	role: ERole | null;
}

const initialState: AuthState = {
	isAuth: false,
	role: null
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state, action: PayloadAction<ERole>) => {
			state.isAuth = true;
			state.role = action.payload;
		},
		logout: (state) => {
			state.isAuth = false;
			state.role = null;
		}
	}
})

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;
