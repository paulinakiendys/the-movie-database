import axios from "axios"

axios.defaults.baseURL = import.meta.env.VITE_TMDB_BASE_URL || 'https://api.themoviedb.org/3'
const API_KEY = import.meta.env.VITE_TMDB_API_KEY || 'qQQSw1r07jvWJa6N83c7xTHw55deX2Uq'

const get = async (endpoint) => {
    const response = await axios.get(endpoint)

    return response.data
}

const getResource = async (
    resource, 
    page = 1,
    query = null,
    include_adult = null,
    with_genres = null,
    append_to_response = null,
    with_people = null,
) => {
    return get(`${resource}?api_key=${API_KEY}&language=en-US&page=${page}&query=${query}&include_adult=${include_adult}&with_genres=${with_genres}&append_to_response=${append_to_response}&with_people=${with_people}`)
}

export const getGenreList = () => {
    return getResource(`/genre/movie/list`)
}

export const getNowPlaying = ({ queryKey }) => {
    const [_key, { page } ] = queryKey
    return getResource(`/movie/now_playing`, page)
}

export const getPopular = ({ queryKey }) => {
    const [_key, { page } ] = queryKey
    return getResource(`/movie/popular`, page)
}

export const getTopRated = ({ queryKey }) => {
    const [_key, { page } ] = queryKey
    return getResource(`/movie/top_rated`, page)
}

export const getMovieByGenre = async ({ queryKey }) => {
    const [_key, { id, page }] = queryKey
    return getResource(`/discover/movie`, page, null, false, id)
}

export const getMovieDetails = async ({ queryKey }) => {
    const [_key, { id }] = queryKey
    return getResource(`/movie/${id}`, 1, null, null, null, 'credits')
}

export const getPerson = async ({ queryKey }) => {
    const [_key, { id }] = queryKey
    return getResource(`/person/${id}`, 1)
}

export const getMoviesByPerson = async ({ queryKey }) => {
    const [_key, { id }] = queryKey
    return getResource(`/discover/movie`, 1, null, null, null, null, id)
}

export const getSimilarMovies = async ({ queryKey }) => {
    const [_key, { id }] = queryKey
    return getResource(`/movie/${id}/similar`)
}

export default {
    getGenreList,
    getNowPlaying,
    getPopular,
    getTopRated,
    getMovieByGenre,
    getMovieDetails,
    getPerson,
    getMoviesByPerson,
    getSimilarMovies,
}