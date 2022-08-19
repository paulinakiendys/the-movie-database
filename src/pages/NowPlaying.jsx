import Container from 'react-bootstrap/Container'
import { useQuery } from 'react-query'
import tmdbAPI from '../services/tmdbAPI'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const NowPlaying = () => {
	const { data, isLoading, isError, error } = useQuery('now-playing', tmdbAPI.getNowPlaying)
	console.log(data)
	const base_URL = 'https://image.tmdb.org/t/p/original/'
	return (
		<Container className="py-3">
			<h1>Movies in theatres</h1>

			{isLoading && (<p>Loading movies in theatres...</p>)}

			{isError && (<p>{error.message}</p>)}

			{data && (
				<Row xs={1} sm={2} md={4} lg={5} className="g-4">
					{data.results.map(movie => (
						<Col key={movie.id}>
							<Card>
								<Card.Img variant="top" src={base_URL + movie.poster_path} />
								<Card.Body>
									<Card.Title>{movie.title}</Card.Title>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			)}

		</Container>
	)
}

export default NowPlaying
