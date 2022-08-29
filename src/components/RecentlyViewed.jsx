import { useMovieContext } from "../contexts/MovieContextProvider"
import { MovieCard } from "./MovieCard"
import { Row } from "react-bootstrap"

const RecentlyViewed = () => {
    const { movies } = useMovieContext()

    return (
        <>
            {movies.length > 0 && (
                <>
                    <h3>Recently viewed</h3>
                    <Row xs={2}md={5} className="g-4">
                        {movies.map(movie => (
                            <MovieCard key={movie.id} movie={movie} id={movie.id}></MovieCard>
                        ))}
                    </Row>
                </>
            )}
        </>
    )
}

export default RecentlyViewed