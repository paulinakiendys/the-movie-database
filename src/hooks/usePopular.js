import { useQuery } from "react-query"
import tmdbAPI from "../services/tmdbAPI"

const usePopular = (page) => {
    return useQuery(['popular', { page }], tmdbAPI.getPopular, {
        keepPreviousData: true,
    })
}

export default usePopular