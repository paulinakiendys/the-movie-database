import { MovieCard } from '../components/MovieCard'
import { useSearchParams } from 'react-router-dom'
import { Row, ButtonGroup, ToggleButton } from 'react-bootstrap'
import Pagination from '../components/Pagination'
import LoadingSpinner from '../components/LoadingSpinner'
import WarningAlert from '../components/alerts/WarningAlert'
import useTrending from '../hooks/useTrending'
import { useState } from 'react'

const Trending = () => {
	const [timeWindow, setTimeWindow] = useState('day')
	const [searchParams, setSearchParams] = useSearchParams({ page: 1 })
	const page = searchParams.get('page') ? Number(searchParams.get('page')) : null
	const { data, isLoading, isError, error, isPreviousData } = useTrending(page, timeWindow)

	const radios = [
		{ name: 'Day', value: 'day' },
		{ name: 'Week', value: 'week' },
	]

	return (
		<>
			<h1 className='mb-3'>Trending movies</h1>

			<ButtonGroup className="mb-2">
				{radios.map((radio, idx) => (
					<ToggleButton
						key={idx}
						id={`radio-${idx}`}
						type="radio"
						variant="secondary"
						name="radio"
						value={radio.value}
						checked={timeWindow === radio.value}
						onChange={(e) => setTimeWindow(e.currentTarget.value)}
					>
						{radio.name}
					</ToggleButton>
				))}
			</ButtonGroup>

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
						onPreviousPage={() => {
							setSearchParams({ page: page - 1 })
							window.scrollTo(0, 0)
						}}
						onNextPage={() => {
							setSearchParams({ page: page + 1 })
							window.scrollTo(0, 0)
						}}
					></Pagination>
				</>
			)}

		</>
	)
}

export default Trending
