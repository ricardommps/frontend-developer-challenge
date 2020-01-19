import { ActionsObservable } from 'redux-observable';
import { of, throwError } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import { delay, mergeMap } from 'rxjs/operators';

import { fetchProductsEpic } from '../Products.epics';
import * as actions from '../Products.actions';

const createTestScheduler = () => {
  const ts = new TestScheduler((actual, expected) => expect(actual).toEqual(expected));
  ts.runMode = true;
  return ts;
};

describe('fetchAtosEpic Epic', () => {
  it('should dispatch the correct actions when it succeds to fetch', (done) => {
    expect.assertions(1);
    const response = {
      products: [
        {
          id: 0,
          name: 'Product Number 0',
          image: '//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6829158',
          oldPrice: 418,
          price: 399,
          description: 'Product long description number 0 just to make more than one like of text.',
          installments: {
            count: 10,
            value: 39.9,
          },
        },
      ],
    };
    const ajax = () => of({ response });
    const expectedOutputActions = actions.fetchProductsActionSuccess(response, 0);
    const action$ = ActionsObservable.of(actions.fetchProductsAction(0));
    const state$ = of({});

    let success;
    fetchProductsEpic(action$, state$, { ajax }).subscribe({
      next(value) {
        if (value.type === actions.fetchProductsActionSuccess().type) {
          success = value;
        }
      },
      error(err) { throw err; },
      complete() { done(); },
    });
    expect(success).toEqual(expectedOutputActions);
  });

  it('should dispatch fetchProductsActionError when it is unreachable', () => {
    const marbles1 = '-a--';
    const marbles2 = '--x-';
    const ts = createTestScheduler();

    const response = { message: 'fetch fail' };
    const duration = ts.createTime('-|');
    const state$ = of({});
    const ajax = () => of({}).pipe(
      delay(duration, ts),
      mergeMap(() => throwError({ message: 'fetch fail' })),
    );
    const values = {
      a: actions.fetchProductsAction(0),
      x: actions.fetchProductsActionError(response),
    };
    const source = ActionsObservable.from(
      ts.createColdObservable(marbles1, values),
    );
    const actual = fetchProductsEpic(source, state$, { ajax });
    ts.expectObservable(actual).toBe(marbles2, values);
    ts.flush();
  });
});
