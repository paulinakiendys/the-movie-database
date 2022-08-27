import { useQuery } from 'react-query'
import tmdbAPI from '../services/tmdbAPI'
import { useParams } from 'react-router-dom'
import PersonDetails from '../components/PersonDetails'
import LoadingSpinner from '../components/LoadingSpinner'
import WarningAlert from '../components/alerts/WarningAlert'

const PersonPage = () => {
  const { id } = useParams()
  const { data: person, isLoading, isError, error } = useQuery(['person', { id }], tmdbAPI.getPerson)
  const { data: movies } = useQuery(['person-movies', { id }], tmdbAPI.getMoviesByPerson)

  return (
    <>

      {isLoading && <LoadingSpinner />}

      {isError && <WarningAlert message={error.message} />}

      {person && (
        <PersonDetails person={person} movies={movies}></PersonDetails>
      )}

    </>
  )
}

export default PersonPage