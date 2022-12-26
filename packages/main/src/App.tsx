import React from 'react';
import {AppRouterProvider} from "./components/AppRouterProvider/AppRouterProvider";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Main, Todo } from './routes';

// @ts-ignore
const Header = React.lazy(() => import('Header/header'))

export const App: React.FC = () => {
	// @ts-ignore
	return <div>
		
		<React.Suspense fallback='loading'>
				<Header />
		</React.Suspense>
		<Routes>
			<Route path='/todo' element={<Todo />}/>
			<Route path='/' element={<Main />}/>
		</Routes>
			{/*<AppRouterProvider />*/}
	</div>
}
