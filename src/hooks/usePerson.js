import { useQuery } from "react-query"
import tmdbAPI from "../services/tmdbAPI"

const usePerson = (id) => {
  return useQuery(['person', { id }], tmdbAPI.getPerson)
}

export default usePerson