import axios from "axios"

const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3/movie'

export const getNowPlaying = async () => {
    const response = await axios.get(`${BASE_URL}/now_playing?api_key=${API_KEY}&language=en-US&page=1`)

    return response.data
}

export const getPopular = async () => {
    const response = await axios.get(`${BASE_URL}/popular?api_key=${API_KEY}&language=en-US&page=1`)

    return response.data
}

export const getTopRated = async () => {
    const response = await axios.get(`${BASE_URL}/top_rated?api_key=${API_KEY}&language=en-US&page=1`)

    return response.data
}

export default {
    getNowPlaying,
    getPopular,
    getTopRated,
}