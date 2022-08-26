import { useQuery } from 'react-query'
import tmdbAPI from '../services/tmdbAPI'
import { MovieCard } from '../components/MovieCard'
import { useParams } from 'react-router-dom'
import { Alert, Container, Row, Button } from 'react-bootstrap'
import { useState } from 'react'

export const GenrePage = () => {
    const [page, setPage] = useState(1)
    const { id } = useParams()
    const { data, isLoading, isError, error, isPreviousData } = useQuery(['genre', { id, page }], tmdbAPI.getMovieByGenre, {
        keepPreviousData: true,
    })
    return (
        <>
            <h1>Movies by genre</h1>

            {isLoading && (<p className='my-3'>Loading movies by genre...</p>)}

            {isError && (<Alert variant="danger"><p>{error.message}</p></Alert>)}

            {data && (
                <>
                    <Row xs={1} sm={2} md={4} lg={5} className="g-4">
                        {data.results.map(movie => (
                            <MovieCard key={movie.id} movie={movie} id={movie.id}></MovieCard>
                        ))}
                    </Row>

                    <div className="pagination d-flex justify-content-between align-items-center mt-4">
                        <Button
                            disabled={isPreviousData || page === 1}
                            variant="primary"
                            onClick={() => setPage(currentPage => currentPage - 1)}
                        >Prev</Button>
                        {page} of {data.total_pages}
                        <Button
                            disabled={isPreviousData || page === data.total_pages}
                            variant="primary"
                            onClick={() => setPage(currentPage => currentPage + 1)}
                        >Next</Button>
                    </div>
                </>
            )}

        </>
    )
}

export default GenrePage
