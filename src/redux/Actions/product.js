import axios from "axios";
import { GET_PRODUCTS, ADD_TO_CART , GET_SINGLE_PRODUCT} from "./types";

  
 
  
  //***** GET all products *****//
  export const getAllProducts = () => async (dispatch) => {
    const res = await axios.get('http://localhost:5000/api/products/getAll')
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data
    });
  };
  // export const getSingleProduct = (id)=>async(dispatch)=>{
  //   const singleProduct = await axios.get(`http://localhost:5000/api/products/getsingleproduct/${id}`)
  //   console.log("Single", singleProduct)
  //   dispatch({
  //     type:GET_SINGLE_PRODUCT,
  //     payload:singleProduct.data
  //   })
  // }
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
  
  
  