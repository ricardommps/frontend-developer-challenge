import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import './Header.scss';

const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText('#FFFFFF'),
    backgroundColor: '#FFFFFF',
    '&:hover': { backgroundColor: '#FFFFFF' },
  },
}))(Button);

const Header = () => (
  <div className="header">
    <div className="container container-header">
      <p>uma seleção de produtos</p>
      <h1>especial para você</h1>
      <p className="subTitle">Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</p>
      <div className="actions">
        <ColorButton variant="contained" className="button">
                Conheça a Linx
        </ColorButton>
        <ColorButton variant="contained" className="button">
                Ajude o algorítimo
        </ColorButton>
        <ColorButton variant="contained" className="button">
                Seus produtos
        </ColorButton>
        <ColorButton variant="contained" className="button">
                Compartilhe
        </ColorButton>
      </div>
    </div>
  </div>
);

export default Header;
