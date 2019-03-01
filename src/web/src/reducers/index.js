import { combineReducers } from 'redux'
import products from './Product'
import currencies from './Currencies';

export default combineReducers({
    products,
    currencies
})