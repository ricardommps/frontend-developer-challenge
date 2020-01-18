export const fetchProductsAction = page => ({ type: 'FETCH_PRODUCTS_ACTION', page });
export const fetchProductsActionSuccess = (data, page) => ({ type: 'FETCH_PRODUCTS_ACTION_SUCCESS', data, page });
export const fetchProductsActionError = () => ({ type: 'FETCH_PRODUCTS_ACTION_ERROR' });
