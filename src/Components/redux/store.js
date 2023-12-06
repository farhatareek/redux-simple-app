// import { createStore  , applyMiddleware} from "redux";
import CounterSlice from "./CounterSlice";
import { configureStore } from "@reduxjs/toolkit";

// const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
// const store = createStore(CounterReduser , enhancer(applyMiddleware(reduxThunk)))
const store = configureStore({
    reducer:{
        counter:CounterSlice
    }
})
export default store