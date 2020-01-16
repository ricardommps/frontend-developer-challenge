// @flow
import type { State } from '../types'
import type { ProductsState, Products, Product } from '../types/products'
  
export function selectProducts(state: State): ProductsState {
    return state.entities.products
}

export function selectCurrentProduct(state: State, _id: number): Product | void {
    const items: Products = state.entities.products.items
    return items.find(item => item._id === _id)
}   