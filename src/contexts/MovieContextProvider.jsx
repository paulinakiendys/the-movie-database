import { createContext, useContext, useEffect, useState } from "react"

export const MovieContext = createContext()

export const useMovieContext = () => {
	return useContext(MovieContext)
}

const MovieContextProvider = ({ children }) => {
	const [movies, setMovies] = useState(() => {
		// get value from localStorage and parse it from JSON
		const value = localStorage.getItem('recently_viewed')

		return (value)
			? JSON.parse(value)
			: []
	})

	useEffect(() => {

		// add movie to recently viewed movies
		if (movies.length <= 10) {
			localStorage.setItem('recently_viewed', JSON.stringify(movies))
		} else {
			movies.pop()
			localStorage.setItem('recently_viewed', JSON.stringify(movies))
		}
	}, [movies])

	const addMovie = movie => {

		// check if viewed movie already exists
		if (!movies.includes(movie)) {
			setMovies([movie, ...movies])
		}
	}

	const values = {
		movies,
		addMovie,
	}

	return (
		<MovieContext.Provider value={values}>
			{children}
		</MovieContext.Provider>
	)
}

export default MovieContextProvider