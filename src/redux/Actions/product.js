import { GET_PRODUCTS } from "./types";
  
 
  
  //***** GET all products *****//
  export const getAllProducts = () => (dispatch) => {
    dispatch({
      type: GET_PRODUCTS,
    });
  };

  
  
  