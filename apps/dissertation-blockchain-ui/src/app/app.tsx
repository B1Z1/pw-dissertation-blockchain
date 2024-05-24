import NxWelcome from './nx-welcome';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NxWelcome title="pw-dissertation-blockchain-ui" />
    </QueryClientProvider>
  );
}

export default App;
