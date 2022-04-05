import { combineReducers } from "redux";
import CartProductReducers from "./products";

const RootReducers = combineReducers({
    products: CartProductReducers
})

export default RootReducers