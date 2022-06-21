import { combineReducers } from "redux";
import productsReducer from "./productsReducers";


const rootReducer = combineReducers({
  allProducts: productsReducer,
});
export default rootReducer;