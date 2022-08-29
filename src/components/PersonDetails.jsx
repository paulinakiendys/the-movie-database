import { Image, ListGroup, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useMovieContext } from '../contexts/MovieContextProvider'

export const PersonDetails = ({ person, movies }) => {
    const { addMovie } = useMovieContext()
    const base_URL = 'https://image.tmdb.org/t/p/w500'
    const navigate = useNavigate()
    return (
        <>
            <h1 className='mb-3'>{person.name}</h1>
            <Image src={base_URL + person.profile_path}></Image>
            <h3>Biography</h3>
            <p>{person.biography}</p>
            <h3>Movies</h3>
            <ListGroup>
                {movies &&
                    movies.results.map(movie =>
                    (
                        <ListGroup.Item key={movie.id}>
                            <Button
                                as={Link}
                                to={`/movies/${movie.id}`}
                                variant="link"
                                onClick={() => addMovie(movie)}
                            >
                                {movie.title} »
                            </Button>
                        </ListGroup.Item>
                    ))
                }
            </ListGroup>
            <Button variant="secondary" onClick={() => navigate(-1)}>&laquo; Back</Button>
        </>
    )
}

export default PersonDetails
