import { takeLatest, put, call, select } from 'redux-saga/effects'
import { fetchProductsFromApi } from '../../services/products'
import navigateTo from '../../services/navigation'
import { selectProducts } from '../../selectors/products'

function* fetchProducts(action) {
    yield put({
        type: 'FETCH_PRODUCTS_PENDING',
        page : action.page
    })

    try {
        const productsFromApi = yield call(fetchProductsFromApi, action.page)
        yield put({
            type: 'FETCH_PRODUCTS_SUCCESS',
            payload: productsFromApi,
        })
    } catch (error) {
        yield put({
            type: 'FETCH_PRODUCTS_FAILURE'
        })
        console.error("---fetchProducts",error) // eslint-disable-line
        yield put(navigateTo('/error'))
    }
}

export function* watchFetchProducts() {
    yield takeLatest('FETCH_PRODUCTS', fetchProducts)
}

function* fetchProductsIfNeeded() {
    const { items: products } = yield select(selectProducts)
    if (products.length === 0) {
        yield call(fetchProducts)
    }
}

export function* watchFetchProductsIfNeeded() {
    yield takeLatest('FETCH_PRODUCTS_IF_NEEDED', fetchProductsIfNeeded)
}