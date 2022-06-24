import { GET_PRODUCTS, ADD_TO_CART } from "./types";

  
 
  
  //***** GET all products *****//
  export const getAllProducts = () => (dispatch) => {
    dispatch({
      type: GET_PRODUCTS,
    });
  };
  export const ADD = (item)=>(dispatch)=>{
    dispatch({
      type:ADD_TO_CART,
      payload:item
    })
  };
  export const DLT = (id) => {
    return {
        type: "RMV_CART",
        payload: id
    }
}

  export const REMOVE = (iteam) => {
    return {
        type: "RMV_ONE",
        payload: iteam
    }
}
  
  
  