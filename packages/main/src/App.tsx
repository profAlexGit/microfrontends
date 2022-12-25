import React from 'react';

// @ts-ignore
const Header = React.lazy(() => import('Header/header'))

export const App: React.FC = () => {
	// @ts-ignore
	return <div>
		<h1>Main</h1>
		<React.Suspense fallback='loading'>
			{/*{React.lazy(() => import('Header/header'))}*/}
			<Header />
		</React.Suspense>

	</div>
}
