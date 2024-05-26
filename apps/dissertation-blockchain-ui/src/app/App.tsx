import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import { router } from '../router/router';
import { AppWrapper } from './App.styled';
import { Toaster } from '@pw-dissertation-blockchain/ui-kit/ui/lib/ui/toaster';

const queryClient = new QueryClient();

export function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<AppWrapper className="relative w-screen h-screen p-8 overflow-hidden">
				<RouterProvider router={router}/>
				<Toaster />
			</AppWrapper>
		</QueryClientProvider>
	);
}
