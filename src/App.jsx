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
import MoviePage from './pages/MoviePage'
import PersonPage from './pages/PersonPage'

function App() {
	return (
		<div id="App">
			<Navigation />

			<Routes>
				<Route path="/" element={<HomePage />} />

				<Route path="/now-playing" element={<NowPlaying />} />
				<Route path="/popular" element={<Popular />} />
				<Route path="/top-rated" element={<TopRated />} />

				<Route path="/genres/:id" element={<GenrePage />} />

				<Route path="/movies/:id" element={<MoviePage />} />
				<Route path="/people/:id" element={<PersonPage />} />

				<Route path="*" element={<NotFound />} />
			</Routes>

			<ReactQueryDevtools position='bottom-right' />
		</div>
	)
}

export default App
