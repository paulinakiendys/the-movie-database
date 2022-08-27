import { useQuery } from "react-query"
import tmdbAPI from "../services/tmdbAPI"

const useTopRated = (page) => {
    return useQuery(['top-rated', { page }], tmdbAPI.getTopRated, {
        keepPreviousData: true,
    })
}

export default useTopRated