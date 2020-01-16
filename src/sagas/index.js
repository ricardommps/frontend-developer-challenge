import { all } from 'redux-saga/effects'
import { watchFetchProductsIfNeeded, watchFetchProducts } from './products/fetch'


export default function* rootSaga() {
    yield all([
        watchFetchProductsIfNeeded(),
        watchFetchProducts()
    ])
} 