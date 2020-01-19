import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import Products from '../Products';
import CardProduct from '../CardProduct';
import * as actions from '../Products.actions';

jest.mock('react-i18next', () => ({
  withI18n: () => (Component) => {
    /* eslint-disable */
          Component.defaultProps = { ...Component.defaultProps, t: k => k };
          /* eslint-enable */
    return Component;
  },
}));

const mockData = {
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
    {
      id: 1,
      name: 'Product Number 1',
      image: '//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6747399',
      oldPrice: 145,
      price: 102,
      description: 'Product long description number 1 just to make more than one like of text.',
      installments: {
        count: 10,
        value: 10.2,
      },
    },
  ],
};

const initialState = {
  productsReducer: {
    loading: false,
    error: false,
    products: mockData,
  },
};

const mockStore = configureStore([]);
const store = mockStore(initialState);
store.dispatch = jest.fn();
const build = storeMock => (
  <Provider store={storeMock}>
    <Products />
  </Provider>
);

describe('Products component', () => {
  it('should mount correctly', () => {
    const wrapper = mount(build(store));
    expect(wrapper).not.toBeNull();
    expect(wrapper).toHaveLength(1);
  });
  it('should mount correctly CardProduct', () => {
    const wrapper = mount(build(store));
    expect(wrapper).not.toBeNull();
    expect(wrapper).toHaveLength(1);
    expect(wrapper.find('.card-product').filter(CardProduct)).toHaveLength(2);
  });
  it('not should mount correctly CardProduct', () => {
    const mockData2 = { products: [] };
    const initialState2 = {
      productsReducer: {
        loading: false,
        error: false,
        products: mockData2,
      },
    };
    const store2 = mockStore(initialState2);
    const wrapper = mount(build(store2));
    expect(wrapper).not.toBeNull();
    expect(wrapper).toHaveLength(1);
    expect(wrapper.find('.card-product').filter(CardProduct)).toHaveLength(0);
  });
  it('should click button load more products', () => {
    const wrapper = mount(build(store));
    wrapper
      .find('.buy-more')
      .first()
      .simulate('click');
    expect(store.dispatch).toHaveBeenLastCalledWith(actions.fetchProductsAction(2));
  });
});
