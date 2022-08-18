import Container from 'react-bootstrap/Container'
import { useQuery } from 'react-query'
import tmdbAPI from '../services/tmdbAPI'

const TopRated = () => {
	const {data, isLoading, isError, error} = useQuery('top-rated', tmdbAPI.getMovie)
	return (
		<Container className="py-3">
			<h1>Top rated movies</h1>

			{isLoading && (<p>Loading top rated movies...</p>)}

			{isError && (<p>{error.message}</p>)}

			{data && (<p>We have data!</p>)}

		</Container>
	)
}

export default TopRated
