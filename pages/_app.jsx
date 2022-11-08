import { store } from '@/redux/store';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import '../styles/globals.css';

// create a client

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		</QueryClientProvider>
	);
}

export default MyApp;
