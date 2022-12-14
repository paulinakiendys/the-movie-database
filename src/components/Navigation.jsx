import { Link, NavLink } from 'react-router-dom'
import { useQuery } from 'react-query'
import tmdbAPI from '../services/tmdbAPI'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'

const Navigation = () => {
	const { data } = useQuery('genre-list', tmdbAPI.getGenreList)
	return (
		<Navbar bg="dark" variant="dark" expand="md">
			<Container>
				<Navbar.Brand as={Link} to="/">🎬 The movie database</Navbar.Brand>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link as={NavLink} to="/now-playing">Now Playing</Nav.Link>
						<Nav.Link as={NavLink} to="/popular">Popular</Nav.Link>
						<Nav.Link as={NavLink} to="/top-rated">Top rated</Nav.Link>
						<NavDropdown title="Trending">
							<NavDropdown.Item as={NavLink} to="/trending/day">Day</NavDropdown.Item>
							<NavDropdown.Item as={NavLink} to="/trending/week">Week</NavDropdown.Item>
						</NavDropdown>
						{data && (
							<NavDropdown title="Genres">
								{data.genres.map(genre => (
									<NavDropdown.Item key={genre.id} as={NavLink} to={`genres/${genre.name}/${genre.id}`}>{genre.name}</NavDropdown.Item>
								))}
							</NavDropdown>
						)}
						<Nav.Link as={NavLink} to="/search">Find movie</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar >
	)
}

export default Navigation
