import { useParams } from 'react-router-dom'
import MovieDetails from '../components/MovieDetails'
import LoadingSpinner from '../components/LoadingSpinner'
import WarningAlert from '../components/alerts/WarningAlert'
import useMovieDetails from '../hooks/useMovieDetails'

const MoviePage = () => {
    const { id } = useParams()
    const { data, isLoading, isError, error } = useMovieDetails(id)
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