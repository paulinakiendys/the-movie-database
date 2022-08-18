import axios from "axios"

export const getMovie = async () => {
    const response = await axios.get('https://api.themoviedb.org/3/movie/550?api_key=183fd22807ddeb836dd0b0eee953ad5b')

    return response.data
}

export default {
    getMovie,
}