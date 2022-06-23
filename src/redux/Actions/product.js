import { GET_PRODUCTS, ADD_TO_CART, REMOVE_CART_ITEM } from "./types";

  
 
  
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
  export const delData = (id) =>(dispatch) => {
    dispatch({
      type:REMOVE_CART_ITEM,
      payload:id

    })
  }

  
  
  