import React from 'react';
import ReactDOM from 'react-dom/client'
import {App} from "./App";
import {BrowserRouter} from "react-router-dom";
// @ts-ignore
// import store from 'Store/store'
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// @ts-ignore
const StoreProvider = React.lazy(() => import('Store/StoreProvider'));

root.render(
		<BrowserRouter>
			<React.Suspense>
				<StoreProvider>
					<App />
				</StoreProvider>
			</React.Suspense>
		</BrowserRouter>
	
);
