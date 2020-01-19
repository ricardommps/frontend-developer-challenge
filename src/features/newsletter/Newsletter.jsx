import React from 'react';
import { PropTypes } from 'prop-types';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { withI18n } from 'react-i18next';
import FormComponent from './Form';
import './Newsletter.scss';

const Newsletter = ({ t }) => (
  <Grid
    container
    direction="column"
    justify="center"
    alignItems="center"
    className="newsletter"
  >
    <Grid item xs={12}>
      <Typography align="center" className="newsletter__title">{t('NEWSLETTER_TITLE')}</Typography>
      <Typography align="center" className="newsletter__subtitle">{t('NEWSLETTER_SUBTITLE')}</Typography>
    </Grid>
    <Grid item xs={12}>
      <FormComponent />
    </Grid>
  </Grid>
);

Newsletter.propTypes = { t: PropTypes.func.isRequired };

export default withI18n()(Newsletter);
