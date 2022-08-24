import axios from "axios"

const API_KEY = import.meta.env.VITE_TMDB_API_KEY || '?api_key=qQQSw1r07jvWJa6N83c7xTHw55deX2Uq'
const BASE_URL = 'https://api.themoviedb.org/3'

const get = async (endpoint) => {
    const response = await axios.get(BASE_URL + endpoint + API_KEY)
    return response.data
}

export const getNowPlaying = () => {
    return get(`/movie/now_playing`)
}

export const getPopular = () => {
    return get(`/movie/popular`)
}

export const getTopRated = () => {
    return get(`/movie/top_rated`)
}

export const getGenreList = () => {
    return get(`/genre/movie/list`)
}

export const getMovieByGenre = async ({ queryKey }) => {
    const [_key, options] = queryKey

    const response = await axios.get(`${BASE_URL}/discover/movie${API_KEY}&include_adult=false&page=${options.page}&with_genres=${options.id}`)
    return response.data
}

export const getMovieDetails = async ({ queryKey }) => {
    const [_key, movie_id] = queryKey

    const response = await axios.get(`${BASE_URL}/movie/${movie_id}${API_KEY}&append_to_response=credits`)
    return response.data
}

export const getPerson = async ({ queryKey }) => {
    const [_key, person_id] = queryKey

    const response = await axios.get(`${BASE_URL}/person/${person_id}${API_KEY}`)
    return response.data
}

export const getMoviesByPerson = async ({ queryKey }) => {
    const [_key, person_id] = queryKey

    const response = await axios.get(`${BASE_URL}/discover/movie${API_KEY}&with_people=${person_id}`)
    return response.data
}

export default {
    getNowPlaying,
    getPopular,
    getTopRated,
    getMovieByGenre,
    getGenreList,
    getMovieDetails,
    getPerson,
    getMoviesByPerson,
}