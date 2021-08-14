import {combineReducers} from "redux";
import bookReducer from "./bookReducer";
import cartReducer from "./cartReducer";

// Combining 
// bookReducer : used for handling states of available books
// and cartReducer: used for handling the cart state
const reducers = combineReducers({
    bookState: bookReducer,
    cartState: cartReducer,
});

export default reducers;