import React from 'react';
import { PropTypes } from 'prop-types';
import { withI18n } from 'react-i18next';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles(theme => ({
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

const CardProduct = ({ product, className, t }) => {
  const classes = useStyles();
  return (
    <Card style={{ boxShadow: 'none', display: 'flex', justifyContent: 'center' }} className={className}>
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
  );
};

CardProduct.propTypes = {
  product: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
};

export default withI18n()(CardProduct);
