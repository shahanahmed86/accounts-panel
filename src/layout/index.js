import React, { lazy, Suspense } from 'react';

// styling
import './style.scss';

// components
import { Loader } from '../components';
const Header = lazy(() => import('./header'));
const Main = lazy(() => import('./main'));
const SideBar = lazy(() => import('./sidebar'));

function Layout() {
	return (
		<Suspense fallback={<Loader loading={true} />}>
			<header>
				<Header />
			</header>
			<main className='main-wrapper'>
				<SideBar />
				<Main />
			</main>
		</Suspense>
	);
}

export default Layout;
