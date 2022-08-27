import { useQuery } from "react-query"
import tmdbAPI from "../services/tmdbAPI"

const useNowPlaying = (page) => {
    return useQuery(['now-playing', { page }], tmdbAPI.getNowPlaying, {
        keepPreviousData: true,
    })
}

export default useNowPlaying