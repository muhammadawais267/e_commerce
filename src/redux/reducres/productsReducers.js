import { ActionTypes } from "../contants/action-type";
const intialState = {
  products: [{
    id:1,
    name:"Awais",
    
  }],
};

 const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export default productsReducer;
