import { NoneLoader, ShowLoader } from "../type/TypeLoader";

export const isloading = (state = { display: "none" }, action) => {
    switch (action.type) {
        case ShowLoader:
            return state = {display:"block"};
            break;
        case NoneLoader:
            return state = {display:"none"};
            break;
        default:
            return state.display
            break;
    }
}