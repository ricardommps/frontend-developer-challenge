import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { withI18n } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import * as actions from './Products.actions';
import './Products.scss';

const useStyles = makeStyles(theme => ({
  root: { flexGrow: 1 },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  card: {
    maxWidth: 200,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  media: { objectFit: 'contain', border: '1px solid #707070' },
  center: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  cadCrontent: { padding: 0, paddingTop: 14 },
}));

const Products = ({ t }) => {
  const classes = useStyles();
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
    <div style={{ marginTop: 20, padding: 30 }}>
      {state.products
            && (
            <Grid container spacing={4} justify="center" alignItems="center">
              <Grid item xs={12}>
                <Typography align="center" className="card-title">{t('PRODUCT_TITLE')}</Typography>
              </Grid>
              {state.products.map(product => (
                <Grid item xs={6} sm={3} key={product.name}>
                  <Card style={{ boxShadow: 'none', display: 'flex', justifyContent: 'center' }}>
                    <Container className={classes.center}>

                      <CardMedia
                        className={classes.media}
                        component="img"
                        height="150"
                        width="200"
                        alt={product.name}
                        image={product.image}
                        title={product.name}
                      />
                      <CardContent className={classes.cadCrontent}>
                        <Typography className="card-title">
                          {product.name}
                        </Typography>
                        <Typography className="card-description">{product.description}</Typography>
                        <Typography className="card-oldPrice"> {t('FROM')} {t('CURRENCY')} {product.oldPrice}</Typography>
                        <Typography className="card-price">{t('BY')} {t('CURRENCY')} {product.price}</Typography>
                        {product.installments
                            && <Typography className="card-installments">{t('OR')} {product.installments.count}x de R${product.installments.value}</Typography>
                          }
                      </CardContent>
                      <Button variant="outlined" fullWidth className="buy-button">
                        {t('BUTTON_BUY')}
                      </Button>

                    </Container>
                  </Card>
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
