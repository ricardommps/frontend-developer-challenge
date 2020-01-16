// @flow

import type { ProductsState as State, ProductsAction as Action } from '../types/products'

function products(
    state: State = {
        items: [],
        loading: false
    },
    action: Action
): State {
    switch (action.type) {
        case 'FETCH_PRODUCTS_PENDING':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_PRODUCTS_SUCCESS':
            return {
                items: action.payload,
                loading: false
            }
        case 'FETCH_PRODUCTS_FAILURE':
            return {
                items: [],
                loading: false
            }
        default:
            return state
    }
}

export default products