import Row from 'react-bootstrap/Row'
import { useQuery } from 'react-query'
import { useSearchParams } from 'react-router-dom'
import tmdbAPI from '../services/tmdbAPI'
import WarningAlert from '../components/alerts/WarningAlert'
import LoadingSpinner from '../components/LoadingSpinner'
import Pagination from '../components/Pagination'
import SearchForm from '../components/SearchForm'
import { MovieCard } from '../components/MovieCard'

const SearchPage = () => {
    const [searchParams, setSearchParams] = useSearchParams({ page: 1 })
    const page = searchParams.get('page') ? Number(searchParams.get('page')) : null
    const query = searchParams.get('query')

    const { data, error, isError, isLoading, isSuccess, isPreviousData, isFetching } = useQuery(['search', { page, query }], tmdbAPI.getFindMovie, {
        enabled: !!query,
    })

    const handleSearch = async query => {
        setSearchParams({ query, page: 1 })
    }
    return (
        <>
            <h1 className="mb-3">Find a movie</h1>

            <div className="my-4">
                <SearchForm onSearch={handleSearch} />
            </div>

            {isLoading || isFetching && <LoadingSpinner />}

            {isError && <WarningAlert message={error.message} />}

            <div>
                {isSuccess && data.results && (
                    <>
                        {query && (<p>Showing search results for '{query}'...</p>)}
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
                            onPreviousPage={() => {
                                setSearchParams({ query, page: page - 1 })
                                window.scrollTo(0, 0)
                            }}
                            onNextPage={() => {
                                setSearchParams({ query, page: page + 1 })
                                window.scrollTo(0, 0)
                            }}
                        ></Pagination>
                    </>
                )}

            </div>
        </>
    )
}

export default SearchPage