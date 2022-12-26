import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Main, Todo } from './routes';
// @ts-ignore
const Header = React.lazy(() => import('Header/header'))
// @ts-ignore
import useAuth from 'Store/useAuth';

export const App: React.FC = () => {
	const {isAuth, role} = useAuth();
	
	return <div>
		
		<React.Suspense fallback='loading'>
				<Header />
		</React.Suspense>
		
		<h2>{`${isAuth} - ${role}`}</h2>
		<Routes>
			<Route path='/todo' element={<Todo />}/>
			<Route path='/' element={<Main />}/>
		</Routes>
	</div>
}
