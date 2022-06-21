<<<<<<< Updated upstream
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './Reducers'

const initialState = {};
const middleware = [thunk];

const store = createStore(
rootReducer,
initialState,
composeWithDevTools(applyMiddleware(...middleware))
)

export default store;

=======
import { createStore, applyMiddleware } from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from "./reducres";

const middlewares = [thunk]
const initialState = {};
const store = createStore( 
  rootReducer,
  initialState,
 composeWithDevTools(applyMiddleware(...middlewares))
  
);

export default store;
>>>>>>> Stashed changes
