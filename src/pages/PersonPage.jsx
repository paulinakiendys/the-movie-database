import { useQuery } from 'react-query'
import tmdbAPI from '../services/tmdbAPI'
import { useParams } from 'react-router-dom'
import { Alert } from 'react-bootstrap'
import PersonDetails from '../components/PersonDetails'

const PersonPage = () => {
  const { id } = useParams()
  const { data: person, isLoading, isError, error } = useQuery(['person', { id }], tmdbAPI.getPerson)
  const { data: movies } = useQuery(['person-movies', { id }], tmdbAPI.getMoviesByPerson)

  return (
    <>

      {isLoading && (<p className='my-3'>Loading person...</p>)}

      {isError && (<Alert variant="danger"><p>{error.message}</p></Alert>)}

      {person && (
        <PersonDetails person={person} movies={movies}></PersonDetails>
      )}

    </>
  )
}

export default PersonPage