// import undoable from "redux-undo";
import { GET_PRODUCTS, ERROR, ADD_TO_CART, REMOVE_CART_ITEM} from "../Actions/types";


import Cover from "../../assests/images/Mcover1.png";
import Mcover from "../../assests/images/Mcover.png";
import Mcover1 from "../../assests/images/Mcover2.png";
import Mcover2 from "../../assests/images/Mcover3.png";
// import ShowImg from "../src/assests/images/watch.png";
// import Showimg1 from "../src/assests/images/Case3.png";
import Case1 from "../../assests/images/Case4.png";
import Case2 from "../../assests/images/Case5.png";
import Case3 from "../../assests/images/Case6.png";
import Case4 from "../../assests/images/Case7.png";
import Case5 from "../../assests/images/Case8.png";
import Case6 from "../../assests/images/Case9.png";
import Case7 from "../../assests/images/Case10.png";
import Case8 from "../../assests/images/Case11.png";
import Case9 from "../../assests/images/Case12.png";
import Case10 from "../../assests/images/Case13.png";
import Case11 from "../../assests/images/Case14.png";
import Case12 from "../../assests/images/Case15.png";
import { v4 as uuidv4 } from 'uuid';
// import Case from '../../assests/images/Case'
// import Case20 from '../../assests/images/'

const initialState = {
  additems:[
    
  
  ],
  products:[
    {
      id:uuidv4(),
      price: "30$",
      del: "101$",
      img: Case10,
      description: "Fancy Lather Case",
      qnty:0,
      thumbnails:[{
        original:'/assests/images/Case13.png',
          thumbnail:'/assests/images/Case13.png'
      },
      {
        original:'/assests/images/Case13.png',
          thumbnail:'/assests/images/Case13.png'
      },
      {
        original:'/assests/images/Case13.png',
          thumbnail:'/assests/images/Case13.png'
      }
  ]
    },
    {
      id:uuidv4(),
      price: "40$",
      del: "99$",
      img: Mcover2,
      description: "Mobile Case for Girls",
      qnty:0,
      thumbnails:[{
        original:'/assests/images/Case13.png',
          thumbnail:'/assests/images/Case13.png'
      },
      {
        original:'/assests/images/Case13.png',
          thumbnail:'/assests/images/Case13.png'
      },
      {
        original:'/assests/images/Case13.png',
          thumbnail:'/assests/images/Case13.png'
      }
  ]
    },
    {
      id:uuidv4(),
      price: "20$",
      del: "101$",
      img: Cover,
      description: "Fancy Lather Case",
      qnty:0,
      thumbnails:[{
        original:'/assests/images/Case13.png',
          thumbnail:'/assests/images/Case13.png'
      },
      {
        original:'/assests/images/Case13.png',
          thumbnail:'/assests/images/Case13.png'
      },
      {
        original:'/assests/images/Case13.png',
          thumbnail:'/assests/images/Case13.png'
      }
  ]
    },
    {
      id:uuidv4(),
      price: "25$",
      del: "101$",
      img: Mcover1,
      description: "Fancy Lather Case",
      qnty:0,
      thumbnails:[{
        original:'/assests/images/Case13.png',
          thumbnail:'/assests/images/Case13.png'
      },
      {
        original:'/assests/images/Case13.png',
          thumbnail:'/assests/images/Case13.png'
      },
      {
        original:'/assests/images/Case13.png',
          thumbnail:'/assests/images/Case13.png'
      }
  ]
    },
  
    {
      id:uuidv4(),
      price: "27$",
      del: "99$",
      img: Case11,
      description: "Fancy Lather Case",
      qnty:0
    },
    {
      id:uuidv4(),
      price: "35$",
      del: "99$",
      img: Case12,
      description: "Fancy Lather Case",
      qnty:0
    },
    {
      id:uuidv4(),
      price: "10$",
      del: "131$",
      img: Mcover,
      description: "Joker Lather Case",
      qnty:0
    },
  
    {
      id:uuidv4(),
      price: "15$",
      del: "99$",
      img: Case1,
      description: "Lather Case Block Color",
      qnty:0
    },
    {
      id:uuidv4(),
      price: "27$",
      del: "99$",
      img: Case2,
      description: "Lather Case Block Color",
      qnty:0
    },
    {
      id:uuidv4(),
      price: "10$",
      del: "79$",
      img: Case3,
      description: "Lather Case Block Color",
      qnty:0
    },
    {
      id:uuidv4(),
      price: "25$",
      del: "180$",
      img: Case4,
      description: "Lather Case Block Color",
      qnty:0
    },
    {
      id:uuidv4(),
      price: "25$",
      del: "180$",
      img: Case5,
      description: "Lather Case Block Color",
      qnty:0
    },
    {
      id:uuidv4(),
      price: "25$",
      del: "180$",
      img: Case6,
      description: "Lather Case Block Color",
      qnty:0
    },
    {
      id:uuidv4(),
      price: "25$",
      del: "180$",
      img: Case7,
      description: "Lather Case Block Color",
      qnty:0
    },
    {
      id:uuidv4(),
      price: "25$",
      del: "180$",
      img: Case8,
      description: "Lather Case Block Color",
      qnty:0
    },
    {
      id:uuidv4(),
      price: "25$",
      del: "180$",
      img: Case9,
      description: "Lather Case Block Color",
      qnty:0
    },
  ],
 productDetails: [
    {
      id:uuidv4(),
      img: Case10,
      price: "20$",
      description:"Fancy Lather Case",
      qnty:0,
      del: "101$",
      
    },
  ]
};

const productResucer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };
      case ADD_TO_CART:
        return{
          ...state,
          additems:[...state.additems, payload]
        }
    case ERROR:
      return {
        ...state,
      };
      case REMOVE_CART_ITEM:
        const delData = state.additems.filter((el)=> el.id !== payload.id)
        return{
          ...state,
          additems:delData
        }
    default:
      
      return state;
  }
};

export default productResucer;
