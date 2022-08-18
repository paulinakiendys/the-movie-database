import axios from "axios"

export const getMovie = async () => {
    const response = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=183fd22807ddeb836dd0b0eee953ad5b&language=en-US&page=1')

    return response.data
}

export default {
    getMovie,
}