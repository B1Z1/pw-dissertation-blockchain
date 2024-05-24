import { createBrowserRouter } from 'react-router-dom';
import { DiplomasPage } from '../features/diplomas/ui/DiplomasPage';
import { RootLayout } from '../shared/layout/RootLayout';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout/>,
		children: [
			{
				path: '/',
				element: <DiplomasPage/>
			}
		]
	}
]);
