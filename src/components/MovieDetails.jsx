import { Image, ListGroup, Button, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { MovieCard } from './MovieCard'

export const MovieDetails = ({ data, similarMovies }) => {
  const base_URL = 'https://image.tmdb.org/t/p/w500'
  const navigate = useNavigate()
  return (
    <>
      <h1 className='mb-3'>{data.title}</h1>
      <Image src={base_URL + data.poster_path}></Image>
      <h3>Overview</h3>
      <p>{data.overview}</p>
      <h3>Cast</h3>
      <ListGroup>
        {
          data.credits.cast.map(castmember =>
          (
            <ListGroup.Item key={castmember.id}>
              <Button
                as={Link}
                to={`/people/${castmember.id}`}
                variant="link"
              >
                {castmember.name} »
              </Button>
            </ListGroup.Item>
          ))
        }
      </ListGroup>
      <h3>Similar movies</h3>
      <Row xs={1} sm={2} md={4} lg={5} className="g-4">
        {
          similarMovies.results.map(movie =>
          (
            <MovieCard key={movie.id} movie={movie} id={movie.id}></MovieCard>
          ))
        }
      </Row>
      <Button variant="secondary" onClick={() => navigate(-1)}>&laquo; Back</Button>
    </>
  )
}

export default MovieDetails
