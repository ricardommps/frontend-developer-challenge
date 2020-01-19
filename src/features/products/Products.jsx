import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { withI18n } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import * as actions from './Products.actions';
import CardProduct from './CardProduct';
import './Products.scss';

const Products = ({ t }) => {
  const dispatch = useDispatch();
  const { products } = useSelector(state => (state.productsReducer.products));
  const [currentPage, setCurrentPage] = React.useState(1);
  const [state, setState] = React.useState({ products: [] });
  useEffect(() => {
    dispatch(actions.fetchProductsAction(currentPage));
  }, []);

  useEffect(() => {
    if (products) {
      const prevState = state.products;
      setState({ products: prevState.concat(products) });
    }
  }, [products]);

  const handleLoadMore = () => {
    dispatch(actions.fetchProductsAction(currentPage + 1));
    setCurrentPage(currentPage + 1);
  };
  return (
    <div style={{ marginTop: 20, padding: '30px 180px' }}>
      {state.products
            && (
            <Grid container spacing={4} justify="center" alignItems="center">
              <Grid item xs={12}>
                <Typography align="center" className="card-title">{t('PRODUCT_TITLE')}</Typography>
              </Grid>
              {state.products.map(product => (
                <Grid item xs={6} sm={3} key={product.name}>
                  <CardProduct product={product} className="card-product" />
                </Grid>
              ))}
              <Grid
                item
                xs={12}
                className="card-footer"
              >
                <Button variant="outlined" className="buy-more" onClick={() => handleLoadMore()}>
                  {t('BUTTON_MORE')}
                </Button>
              </Grid>
            </Grid>
            )
        }
    </div>
  );
};

Products.propTypes = { t: PropTypes.func.isRequired };

export default withI18n()(Products);
