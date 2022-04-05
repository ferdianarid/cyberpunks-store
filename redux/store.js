import { applyMiddleware, createStore } from "redux"
import RootReducers from "./reducers/rootReducers"
import { composeWithDevTools } from "redux-devtools-extension"

const store = createStore(RootReducers, composeWithDevTools())

export default store