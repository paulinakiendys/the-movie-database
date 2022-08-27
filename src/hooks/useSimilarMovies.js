import { useQuery } from "react-query"
import tmdbAPI from "../services/tmdbAPI"

const useSimilarMovies = (id) => {
  return useQuery(['similar-movies', { id }], tmdbAPI.getSimilarMovies)
}

export default useSimilarMovies