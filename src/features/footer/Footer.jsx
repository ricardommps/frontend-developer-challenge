import React from 'react';
import { PropTypes } from 'prop-types';
import { Typography } from '@material-ui/core';
import { withI18n } from 'react-i18next';
import './Footer.scss';

const Footer = ({ t }) => (
  <div className="footer">
    <div className="row text-container">
      <Typography>{t('FOOTER_SECTION1')}</Typography>
      <Typography>{t('FOOTER_SECTION2')}</Typography>
      <Typography>{t('FOOTER_SECTION3')}</Typography>
    </div>
  </div>
);

Footer.propTypes = { t: PropTypes.func.isRequired };

export default withI18n()(Footer);
