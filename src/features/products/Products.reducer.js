import * as actions from './Products.actions';
import { createReducer } from '../../common/redux/createReducer';

export const initialState = {
  loading: false,
  error: false,
  products: [],
};

const fetchProducts = state => ({
  ...state,
  loading: true,
  error: false,
});

const fetchProductsSuccess = (state, action) => ({
  ...state,
  products: action.data,
  loading: false,
  error: false,
});

const fetchProductsError = state => ({
  ...state,
  loading: false,
  error: true,
});


export const productsReducer = createReducer(initialState, {
  [actions.fetchProductsAction().type]: fetchProducts,
  [actions.fetchProductsActionSuccess().type]: fetchProductsSuccess,
  [actions.fetchProductsActionError().type]: fetchProductsError,
});

export default productsReducer;
