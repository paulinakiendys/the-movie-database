import { useQuery } from "react-query"
import tmdbAPI from "../services/tmdbAPI"

const useMovieDetails = (id) => {
    return useQuery(['movie', { id }], tmdbAPI.getMovieDetails)
}

export default useMovieDetails