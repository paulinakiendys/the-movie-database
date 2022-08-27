import { useQuery } from 'react-query'
import tmdbAPI from '../services/tmdbAPI'
import { useParams } from 'react-router-dom'
import { Alert } from 'react-bootstrap'
import MovieDetails from '../components/MovieDetails'

const MoviePage = () => {
    const { id } = useParams()
    const { data, isLoading, isError, error } = useQuery(['movie', { id }], tmdbAPI.getMovieDetails)
    return (
        <>
            {isLoading && (<p className='my-3'>Loading movie...</p>)}

            {isError && (<Alert variant="danger"><p>{error.message}</p></Alert>)}

            {data && (
                <MovieDetails data={data}></MovieDetails>
            )}
        </>
    )
}

export default MoviePage