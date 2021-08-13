import { createStore } from "redux";
import reducers from "./reducers/rootReducer";

// Creating a store with the combined reducer
const store = createStore(reducers);

export default store;