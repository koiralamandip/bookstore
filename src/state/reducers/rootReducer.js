import {combineReducers} from "redux";
import bookReducer from "./bookReducer";
import cartReducer from "./cartReducer";

const reducers = combineReducers({
    bookState: bookReducer,
    cartState: cartReducer,
});

export default reducers;