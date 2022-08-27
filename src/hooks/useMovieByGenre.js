import { useQuery } from "react-query"
import tmdbAPI from "../services/tmdbAPI"

const useMovieByGenre = (id, page) => {
    return useQuery(['genre', { id, page }], tmdbAPI.getMovieByGenre, {
        keepPreviousData: true,
    })
}

export default useMovieByGenre