import Container from 'react-bootstrap/Container'
import { useQuery } from 'react-query'
import tmdbAPI from '../services/tmdbAPI'
import Row from 'react-bootstrap/Row';
import { MovieCard } from '../components/MovieCard';

const NowPlaying = () => {
	const { data, isLoading, isError, error } = useQuery('now-playing', tmdbAPI.getNowPlaying)
	// console.log(data)
	const base_URL = 'https://image.tmdb.org/t/p/original/'
	return (
		<Container className="py-3">
			<h1>Movies in theatres</h1>

			{isLoading && (<p>Loading movies in theatres...</p>)}

			{isError && (<p>{error.message}</p>)}

			{data && (
				<Row xs={1} sm={2} md={4} lg={5} className="g-4">
					{data.results.map(movie => (
						<MovieCard key={movie.id} base_URL={base_URL} movie={movie}></MovieCard>
					))}
				</Row>
			)}
		</Container>
	)
}

export default NowPlaying
