// @flow

import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux'
import type { ProductsState, ProductsAction } from './products'

export type ReduxInitAction = {type: '@@INIT'}
export type Action = ReduxInitAction | ProductsAction

export type State = { entities: { 
        products: ProductsState
    } }

export type Store = ReduxStore < State, Action >
export type Dispatch = ReduxDispatch < Action >