import { useQuery } from 'react-query'
import tmdbAPI from '../services/tmdbAPI'
import { useParams, useNavigate } from 'react-router-dom'
import { Alert, Image, ListGroup, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const PersonPage = () => {
  const base_URL = 'https://image.tmdb.org/t/p/w500'
  const { id } = useParams()
  const { data: person, isLoading, isError, error } = useQuery(['person', id], tmdbAPI.getPerson)
  const { data: movies } = useQuery(['person-movies', id], tmdbAPI.getMoviesByPerson)
  const navigate = useNavigate()

  // console.log(movies)
  return (
    <>

      {isLoading && (<p className='my-3'>Loading person...</p>)}

      {isError && (<Alert variant="danger"><p>{error.message}</p></Alert>)}

      {person && (
        <>
          <h1>{person.name}</h1>
          <Image src={base_URL + person.profile_path}></Image>
          <h3>Biography</h3>
          <p>{person.biography}</p>
          <h3>Movies</h3>
          <ListGroup>
            {movies &&
              movies.results.map(movie =>
              (
                <ListGroup.Item key={movie.id}>
                  <Button
                    as={Link}
                    to={`/movies/${movie.id}`}
                    variant="link"
                  >
                    {movie.title} »
                  </Button>
                </ListGroup.Item>
              ))
            }
          </ListGroup>
          <Button variant="secondary" onClick={() => navigate(-1)}>&laquo; Back</Button>
        </>
      )}

    </>
  )
}

export default PersonPage