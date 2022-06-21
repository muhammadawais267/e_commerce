// import undoable from "redux-undo";
import { GET_PRODUCTS, ERROR} from "../Actions/types";


const initialState = {
  products: 25,
};

const productResucer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };
    case ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default productResucer;
