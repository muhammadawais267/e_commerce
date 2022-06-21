import {combineReducers} from 'redux';
import productResucer from './productReducer';

const rootReducer = combineReducers({
    product: productResucer
})

export default rootReducer;