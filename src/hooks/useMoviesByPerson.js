import { useQuery } from "react-query"
import tmdbAPI from "../services/tmdbAPI"

const useMoviesByPerson = (id) => {
    return useQuery(['person-movies', { id }], tmdbAPI.getMoviesByPerson)
}

export default useMoviesByPerson