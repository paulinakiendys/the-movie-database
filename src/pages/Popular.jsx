import Container from 'react-bootstrap/Container'
import { useQuery } from 'react-query'
import tmdbAPI from '../services/tmdbAPI'
import Row from 'react-bootstrap/Row';
import { MovieCard } from '../components/MovieCard'

const Popular = () => {
	const { data, isLoading, isError, error } = useQuery('popular', tmdbAPI.getPopular)
	// console.log(data)
	const base_URL = 'https://image.tmdb.org/t/p/original/'
	return (
		<Container className="py-3">
			<h1>Current popular movies</h1>

			{isLoading && (<p>Loading current popular movies...</p>)}

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

export default Popular
