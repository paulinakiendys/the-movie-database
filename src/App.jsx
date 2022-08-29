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
import { Container } from 'react-bootstrap'
import SearchPage from './pages/SearchPage'
import Trending from './pages/Trending'

function App() {
	return (
		<div id="App">
			<Navigation />

			<Container className="py-3">
				<Routes>
					<Route path="/" element={<HomePage />} />

					<Route path="/now-playing" element={<NowPlaying />} />
					<Route path="/popular" element={<Popular />} />
					<Route path="/top-rated" element={<TopRated />} />
					<Route path="/trending" element={<Trending />} />

					<Route path="/genres/:id" element={<GenrePage />} />

					<Route path="/movies/:id" element={<MoviePage />} />
					<Route path="/people/:id" element={<PersonPage />} />

					<Route path="/search" element ={<SearchPage />} />

					<Route path="*" element={<NotFound />} />
				</Routes>
			</Container>

			<ReactQueryDevtools position='bottom-right' />
		</div>
	)
}

export default App
