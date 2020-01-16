import type { Product, Products } from '../types/products'
import service from '../api/Api'

export function fetchProductsFromApi(page: number): Promise < Product > | Promise < Products > {
    return service.get(`/products?page=${page}`)
}
