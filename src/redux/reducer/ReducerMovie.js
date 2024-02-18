import { AllMovie } from "../type/TypeMovie";
const inashilValue = { movie: [], pageCount: 0 }
export const ReduserMovie = (state = inashilValue, action) => {
    switch (action.type) {
        case AllMovie:
            return { movie: action.data, pageCount: action.page, totalPage:action.totale }
            break;

        default:
            return state
            break;
    }
}