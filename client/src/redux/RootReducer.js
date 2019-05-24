import { combineReducers } from "redux";
import productReducer from "./ProductReducer";
import cartreducer from "./CartReducer";

export default combineReducers({
    cartreducer,productReducer
});