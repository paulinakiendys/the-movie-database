import { useQuery } from 'react-query'
import tmdbAPI from '../services/tmdbAPI'
import { MovieCard } from '../components/MovieCard'
import { Alert, Row } from 'react-bootstrap'
import Pagination from '../components/Pagination'
import { useState } from 'react'


const NowPlaying = () => {
	const [page, setPage] = useState(1)
	const { data, isLoading, isError, error, isPreviousData } = useQuery(['now-playing', { page }], tmdbAPI.getNowPlaying)
	// console.log(page)
	return (
		<>
			<h1 className='mb-3'>Movies in theatres</h1>

			{isLoading && (<p className='my-3'>Loading movies in theatres...</p>)}

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
						onPreviousPage={() => setPage(currentPage => currentPage - 1)}
						onNextPage={() => setPage(currentPage => currentPage + 1)}
					></Pagination>
				</>
			)}
		</>
	)
}

export default NowPlaying
