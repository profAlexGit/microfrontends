import {configureStore} from '@reduxjs/toolkit';
import authReducer from './Slices/auth';
import {Provider} from "react-redux";
import React, {ReactNode} from 'react';

export const store = configureStore({
	reducer: {
		auth: authReducer
	}
})

export type RootState = ReturnType<typeof  store.getState>;
export type AppDispatch = typeof store.dispatch;

type StoreProviderProps = {
	children: ReactNode
}

export default function StoreProvider({children}: StoreProviderProps) {
	return <Provider store={store}>
		{children}
		</Provider>
};
