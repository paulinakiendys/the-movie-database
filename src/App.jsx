import { ReactQueryDevtools } from 'react-query/devtools'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import './assets/scss/App.scss'
import NowPlaying from './pages/NowPlaying'
import Popular from './pages/Popular'
import TopRated from './pages/TopRated'
import GenrePage from './pages/GenrePage'

function App() {
	return (
		<div id="App">
			<Navigation />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/now-playing" element={<NowPlaying />} />
				<Route path="/popular" element={<Popular />} />
				<Route path="/top-rated" element={<TopRated />} />
				<Route path="/genre/:id" element={<GenrePage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>

			<ReactQueryDevtools position='bottom-right' />
		</div>
	)
}

export default App
