import axios from "axios"

const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

export const getNowPlaying = async () => {
    const response = await axios.get(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`)

    return response.data
}

export const getPopular = async () => {
    const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)

    return response.data
}

export const getTopRated = async () => {
    const response = await axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)

    return response.data
}

export const getMovieByGenre = async ({ queryKey }) => {
    const [_key, genre_id] = queryKey

    const response = await axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genre_id}`)
    return response.data
}

export const getGenreList = async () => {
    const response = await axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`)

    return response.data
}

export default {
    getNowPlaying,
    getPopular,
    getTopRated,
    getMovieByGenre,
    getGenreList,
}