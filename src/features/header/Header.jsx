import React from 'react';
import { PropTypes } from 'prop-types';
import { withI18n } from 'react-i18next';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import './Header.scss';

const ColorButton = withStyles(() => ({
  root: {
    fontSize: 14,
    color: '#888888',
    backgroundColor: '#FFFFFF',
    '&:hover': { backgroundColor: '#FFFFFF' },
  },
}))(Button);

const Header = ({ t }) => (
  <div className="header">
    <div className="container container-header">
      <Typography className="section1">{t('HEADER_SECTION1')}</Typography>
      <Typography className="section2">{t('HEADER_SECTION2')}</Typography>
      <Typography variant="h1" className="section3">{t('HEADER_SECTION3')}</Typography>
      <div className="actions">
        <ColorButton variant="contained" className="button">
          {t('HEADER_BUTTON1')}
        </ColorButton>
        <ColorButton variant="contained" className="button">
          {t('HEADER_BUTTON2')}
        </ColorButton>
        <ColorButton variant="contained" className="button">
          {t('HEADER_BUTTON3')}
        </ColorButton>
        <ColorButton variant="contained" className="button">
          {t('HEADER_BUTTON4')}
        </ColorButton>
      </div>
    </div>
  </div>
);

Header.propTypes = { t: PropTypes.func.isRequired };

export default withI18n()(Header);
