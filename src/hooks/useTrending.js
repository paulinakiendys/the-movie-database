import { useQuery } from "react-query"
import tmdbAPI from "../services/tmdbAPI"

const useTrending = (page, timeWindow) => {
    return useQuery(['trending', { page, timeWindow }], tmdbAPI.getTrending, {
        keepPreviousData: true,
    })
}

export default useTrending