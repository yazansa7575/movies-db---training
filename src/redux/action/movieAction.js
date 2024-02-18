import axios from "axios"
import { AllMovie, api_key, basicURL } from "../type/TypeMovie"

export const showMovie = () => {
    return async (dispatch) => {
        let resulte = await axios.get(basicURL + "movie/popular?api_key=" + api_key)
        dispatch({ type: AllMovie, data: resulte.data.results, page: resulte.data.page, totale: 500 })
    }


}

export const SearchMovie = (searchQuery) => {
    return async (dispatch) => {
        let resulte = await axios.get(`${basicURL}search/movie?api_key=${api_key}&query=${searchQuery}`)
        dispatch({ type: AllMovie, data: resulte.data.results, page: resulte.data.page, totale: resulte.data.total_pages })
    }


}
export const GetMoviepages = (page) => {
    return async (dispatch) => {
        let resulte = await axios.get(`${basicURL}movie/popular?api_key=${api_key}&page=${page}`)

        dispatch(
            {
                type: AllMovie,
                data: resulte.data.results,
                page: resulte.data.total_pages,
                totale: 500
            })
    }


}