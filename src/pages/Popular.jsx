import Container from 'react-bootstrap/Container'
import { useQuery } from 'react-query'
import tmdbAPI from '../services/tmdbAPI'

const Popular = () => {
	const {data, isLoading, isError, error} = useQuery('popular', tmdbAPI.getPopular)
	console.log(data)
	return (
		<Container className="py-3">
			<h1>Current popular movies</h1>

			{isLoading && (<p>Loading current popular movies...</p>)}

			{isError && (<p>{error.message}</p>)}

			{data && (<p>We have data!</p>)}

		</Container>
	)
}

export default Popular
