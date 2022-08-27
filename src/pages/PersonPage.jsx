import { useParams } from 'react-router-dom'
import PersonDetails from '../components/PersonDetails'
import LoadingSpinner from '../components/LoadingSpinner'
import WarningAlert from '../components/alerts/WarningAlert'
import usePerson from '../hooks/usePerson'
import useMoviesByPerson from '../hooks/useMoviesByPerson'

const PersonPage = () => {
  const { id } = useParams()
  const { data: person, isLoading, isError, error } = usePerson(id)
  const { data: movies } = useMoviesByPerson(id)

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