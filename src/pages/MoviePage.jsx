import { useQuery } from 'react-query'
import tmdbAPI from '../services/tmdbAPI'
import { useParams } from 'react-router-dom'
import { Alert, Container, Image, ListGroup, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MoviePage = () => {
    const base_URL = 'https://image.tmdb.org/t/p/w500'
    const { id } = useParams()
    const { data, isLoading, isError, error } = useQuery(['movie', id], tmdbAPI.getMovieDetails)

    return (
        <>
            {isLoading && (<p className='my-3'>Loading movie...</p>)}

            {isError && (<Alert variant="danger"><p>{error.message}</p></Alert>)}

            {data && (
                <>
                    <h1>{data.title}</h1>
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
                </>
            )}
        </>
    )
}

export default MoviePage