import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { ajax } from 'rxjs/ajax';

/* REDUCERS */
import productsReducer from '../features/products/Products.reducer';

/* EPICS */
import * as ProductsEpics from '../features/products/Products.epics';

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = reduxDevTools || compose;

const rootReducer = combineReducers({ productsReducer });

const epics = [
  ...Object.values(ProductsEpics),
];

export const configureStore = () => {
  let Store = null;
  const proxyAjax = (orireq) => {
    let req = null;
    req = { ...orireq, headers: { ...orireq.headers } };
    return ajax(req);
  };
  const epicMiddleware = createEpicMiddleware({
    dependencies: {
      ajax: proxyAjax,
      fetch,
      window,
    },
  });
  const middleware = [epicMiddleware];
  Store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware)),
  );
  const rootEpic = combineEpics(...epics);
  epicMiddleware.run(rootEpic);
  return Store;
};
