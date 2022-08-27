import { useQuery } from 'react-query'
import tmdbAPI from '../services/tmdbAPI'
import { useParams } from 'react-router-dom'
import MovieDetails from '../components/MovieDetails'
import LoadingSpinner from '../components/LoadingSpinner'
import WarningAlert from '../components/alerts/WarningAlert'

const MoviePage = () => {
    const { id } = useParams()
    const { data, isLoading, isError, error } = useQuery(['movie', { id }], tmdbAPI.getMovieDetails)
    return (
        <>
            {isLoading && <LoadingSpinner />}

            {isError && <WarningAlert message={error.message} />}

            {data && (
                <MovieDetails data={data}></MovieDetails>
            )}
        </>
    )
}

export default MoviePage