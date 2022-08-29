import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import MovieContextProvider from './contexts/MovieContextProvider'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			staleTime: 1000 * 60 * 60, // 1 hour
			cacheTime: 1000 * 60 * 60 * 4,	// 4 hours
		}
	}
})

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>

		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<MovieContextProvider>
					<App />
				</MovieContextProvider>
			</BrowserRouter>
		</QueryClientProvider>

	</React.StrictMode>
)
