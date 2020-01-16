// @flow

import { combineReducers } from 'redux'
import products from './products'

const entitiesReducer = combineReducers({
    products
})

const rootReducer = combineReducers({
    entities: entitiesReducer
})

export default rootReducer