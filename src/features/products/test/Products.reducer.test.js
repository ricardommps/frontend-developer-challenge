import * as actions from '../Products.actions';
import { initialState, productsReducer } from '../Products.reducer';


describe('Products reducer', () => {
  it('should return initial state', () => {
    expect(productsReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle fetchProductsAction action', () => {
    expect(productsReducer(initialState, actions.fetchProductsAction(1))).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('should handle fetchProductsActionSuccess action', () => {
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
    expect(productsReducer(initialState, actions.fetchProductsActionSuccess(response))).toEqual({
      ...initialState,
      products: response,
      loading: false,
    });
  });

  it('should handle fetchProductsActionError action', () => {
    expect(productsReducer(initialState, actions.fetchProductsActionError())).toEqual({
      ...initialState,
      loading: false,
      error: true,
    });
  });
});
