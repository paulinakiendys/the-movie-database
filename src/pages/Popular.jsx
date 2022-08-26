import { useQuery } from 'react-query'
import tmdbAPI from '../services/tmdbAPI'
import { MovieCard } from '../components/MovieCard'
import { Alert, Container, Row } from 'react-bootstrap'

const Popular = () => {
	const { data, isLoading, isError, error } = useQuery('popular', tmdbAPI.getPopular)
	// console.log(data)
	return (
		<>
			<h1>Current popular movies</h1>

			{isLoading && (<p className='my-3'>Loading current popular movies...</p>)}

			{isError && (<Alert variant="danger"><p>{error.message}</p></Alert>)}

			{data && (
				<Row xs={1} sm={2} md={4} lg={5} className="g-4">
					{data.results.map(movie => (
						<MovieCard key={movie.id} movie={movie} id={movie.id}></MovieCard>
					))}
				</Row>
			)}

		</>
	)
}

export default Popular
