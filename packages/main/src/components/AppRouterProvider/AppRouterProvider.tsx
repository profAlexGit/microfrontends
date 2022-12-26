import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {Main, Todo} from "../../routes";

const routes = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
	},
	{
		path: '/todo',
		element: <Todo />,
	}
]);

export const AppRouterProvider: React.FC = () => {
	return <RouterProvider router={routes} />
}
