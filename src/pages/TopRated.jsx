import { useQuery } from 'react-query'
import tmdbAPI from '../services/tmdbAPI'
import { MovieCard } from '../components/MovieCard'
import { useSearchParams } from 'react-router-dom'
import { Row } from 'react-bootstrap'
import Pagination from '../components/Pagination'
import LoadingSpinner from '../components/LoadingSpinner'
import WarningAlert from '../components/alerts/WarningAlert'

const TopRated = () => {
	const [searchParams, setSearchParams] = useSearchParams({ page: 1 })
	const page = searchParams.get('page') ? Number(searchParams.get('page')) : null
	const { data, isLoading, isError, error, isPreviousData } = useQuery(['top-rated', { page }], tmdbAPI.getTopRated)
	// console.log(data)
	return (
		<>
			<h1 className='mb-3'>Top rated movies</h1>

			{isLoading && <LoadingSpinner />}

			{isError && <WarningAlert message={error.message} />}

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
						onPreviousPage={() => setSearchParams({ page: page - 1 })}
						onNextPage={() => setSearchParams({ page: page + 1 })}
					></Pagination>
				</>
			)}

		</>
	)
}

export default TopRated
