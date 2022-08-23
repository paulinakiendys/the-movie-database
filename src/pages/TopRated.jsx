import Container from 'react-bootstrap/Container'
import { useQuery } from 'react-query'
import tmdbAPI from '../services/tmdbAPI'
import Row from 'react-bootstrap/Row';
import { MovieCard } from '../components/MovieCard'

const TopRated = () => {
	const { data, isLoading, isError, error } = useQuery('top-rated', tmdbAPI.getTopRated)
	// console.log(data)
	return (
		<Container className="py-3">
			<h1>Top rated movies</h1>

			{isLoading && (<p>Loading top rated movies...</p>)}

			{isError && (<p>{error.message}</p>)}

			{data && (
				<Row xs={1} sm={2} md={4} lg={5} className="g-4">
					{data.results.map(movie => (
						<MovieCard key={movie.id} movie={movie}></MovieCard>
					))}
				</Row>
			)}

		</Container>
	)
}

export default TopRated
