import { Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useMovieContext } from '../contexts/MovieContextProvider'

export const MovieCard = ({ id, movie }) => {
    const { addMovie } = useMovieContext()

    const base_URL = 'https://image.tmdb.org/t/p/w500'
    return (
        <Col>
            <Link to={`/movies/${id}`} onClick={() => addMovie(movie)}>
                <Card>
                    <Card.Img variant="top" src={base_URL + movie.poster_path} />
                    <Card.Body>
                        <Card.Title>{movie.title}</Card.Title>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    )
}
