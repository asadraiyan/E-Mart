import { createStore } from "redux";
import rootReducer from "./reducer/Index";

const store = createStore(rootReducer)

export default store