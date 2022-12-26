import React from 'react';
import {RootState} from '../store';
import {useDispatch, useSelector} from "react-redux";
import {ERole, login, logout} from "../Slices/auth";

function useAuth() {
	const isAuth = useSelector((state: RootState) => state.auth.isAuth);
	const role = useSelector((state: RootState) => state.auth.role)
	const dispatch = useDispatch();
	
	return {
		isAuth,
		role,
		login: (role: ERole) => dispatch(login(role)),
		logout: () => dispatch(logout())
	}
}

export default useAuth;
