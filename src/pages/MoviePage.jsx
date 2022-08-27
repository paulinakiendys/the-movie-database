import { useParams } from 'react-router-dom'
import MovieDetails from '../components/MovieDetails'
import LoadingSpinner from '../components/LoadingSpinner'
import WarningAlert from '../components/alerts/WarningAlert'
import useMovieDetails from '../hooks/useMovieDetails'
import useSimilarMovies from '../hooks/useSimilarMovies'

const MoviePage = () => {
    const { id } = useParams()
    const { data, isLoading, isError, error } = useMovieDetails(id)
    const { data: similarMovies } = useSimilarMovies(id)

    return (
        <>
            {isLoading && <LoadingSpinner />}

            {isError && <WarningAlert message={error.message} />}

            {data && similarMovies && (
                <MovieDetails data={data} similarMovies={similarMovies}></MovieDetails>
            )}
        </>
    )
}

export default MoviePage