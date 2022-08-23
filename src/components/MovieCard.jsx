import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

export const MovieCard = ({ movie }) => {
    const base_URL = 'https://image.tmdb.org/t/p/w500'
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={base_URL + movie.poster_path} />
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    )
}
