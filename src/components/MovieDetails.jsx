import { Image, ListGroup, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export const MovieDetails = ({ data }) => {
  const base_URL = 'https://image.tmdb.org/t/p/w500'
  const navigate = useNavigate()
  return (
      <>
        <h1 className='mb-3'>{data.title}</h1>
        <Image src={base_URL + data.poster_path}></Image>
        <h3>Overview</h3>
        <p>{data.overview}</p>
        <h3>Cast</h3>
        <ListGroup>
          {
            data.credits.cast.map(castmember =>
            (
              <ListGroup.Item key={castmember.id}>
                <Button
                  as={Link}
                  to={`/people/${castmember.id}`}
                  variant="link"
                >
                  {castmember.name} »
                </Button>
              </ListGroup.Item>
            ))
          }
        </ListGroup>
        <Button variant="secondary" onClick={() => navigate(-1)}>&laquo; Back</Button>
      </>
  )
}

export default MovieDetails
