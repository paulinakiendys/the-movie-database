import { useQuery } from 'react-query'
import tmdbAPI from '../services/tmdbAPI'
import { MovieCard } from '../components/MovieCard'
import { useParams } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap';

export const GenrePage = () => {
    const { id } = useParams()
    const { data, isLoading, isError, error } = useQuery(['genre', id], tmdbAPI.getMovieByGenre)

    const base_URL = 'https://image.tmdb.org/t/p/original/'
    return (
        <Container className="py-3">
            <h1>Movies by genre</h1>

            {isLoading && (<p>Loading movies by genre...</p>)}

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

export default GenrePage
