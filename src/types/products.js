// @flow

export type Product = {
    +_id: number,
    +name: string,
    +image: string,
    +oldPrice: number,
    +price: number,
    +description: string,
    +installments: object
}

export type ProductPayload = $Diff <Product,{id: number}>
export type Products = Array <Product>
export type ProductsState = {
        +items: Products,
        +loading: boolean
    }

export type ProductsAction = 
    | { type: 'FETCH_PRODUCTS'} 
    | { type: 'FETCH_PRODUCTS_IF_NEEDED' } 
    | { type: 'FETCH_PRODUCTS_PENDING', page: number } 
    | { type: 'FETCH_PRODUCTS_SUCCESS', payload: Products } 
    | { type: 'FETCH_PRODUCTS_FAILURE' }