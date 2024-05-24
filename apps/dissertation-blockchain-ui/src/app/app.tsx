import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Button } from '@pw-dissertation-blockchain/ui-kit/ui/lib/ui/button';

const queryClient = new QueryClient();

export function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Button>Hello</Button>
		</QueryClientProvider>
	);
}

export default App;
