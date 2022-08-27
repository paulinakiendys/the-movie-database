import { useQuery } from 'react-query'
import tmdbAPI from '../services/tmdbAPI'
import { MovieCard } from '../components/MovieCard'
import { useParams, useSearchParams } from 'react-router-dom'
import { Alert, Row } from 'react-bootstrap'
import Pagination from '../components/Pagination'

export const GenrePage = () => {
    const [searchParams, setSearchParams] = useSearchParams({ page: 1 })
    const page = searchParams.get('page') ? Number(searchParams.get('page')) : null
    const { id } = useParams()
    const { data, isLoading, isError, error, isPreviousData } = useQuery(['genre', { id, page }], tmdbAPI.getMovieByGenre, {
        keepPreviousData: true,
    })
    return (
        <>
            <h1 className='mb-3'>Movies by genre</h1>

            {isLoading && (<p className='my-3'>Loading movies by genre...</p>)}

            {isError && (<Alert variant="danger"><p>{error.message}</p></Alert>)}

            {data && (
                <>
                    <Row xs={1} sm={2} md={4} lg={5} className="g-4">
                        {data.results.map(movie => (
                            <MovieCard key={movie.id} movie={movie} id={movie.id}></MovieCard>
                        ))}
                    </Row>

                    <Pagination
                        page={page}
                        total_pages={data.total_pages}
                        hasPreviousPage={isPreviousData || page !== 1}
                        hasNextPage={isPreviousData || page !== data.total_pages}
                        onPreviousPage={() => setSearchParams({ page: page - 1})}
                        onNextPage={() => setSearchParams({ page: page + 1})}
                    ></Pagination>
                </>
            )}

        </>
    )
}

export default GenrePage
