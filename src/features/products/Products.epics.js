
import { of } from 'rxjs';
import { mergeMap, catchError, timeout } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { URL_API, FETCH_TIMEOUT } from '../../common/constants';

import * as actions from './Products.actions';

const fetchProductsAjax = (action) => {
  const { page } = action;
  return {
    url: `${URL_API}/products?page=${page}`,
    headers: { 'Content-Type': 'application/json' },
    method: 'GET',
  };
};

export const fetchProductsEpic = (action$, state$, { ajax }) => (
  action$.pipe(
    ofType(actions.fetchProductsAction().type),
    mergeMap(action => ajax(fetchProductsAjax(action, state$)).pipe(
      timeout(FETCH_TIMEOUT),
      mergeMap(response => of(actions.fetchProductsActionSuccess(response.response, action.page))),
      catchError(() => of(actions.fetchProductsActionError())),
    )),
  )
);
