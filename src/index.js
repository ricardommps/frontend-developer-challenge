import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { configureStore } from './store';
import { GlobalLoading } from './components/loading/loading';
import './i18n/i18n';
import './scss/index.scss';
// eslint-disable-next-line import/order
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '"Roboto"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

const App = React.lazy(() => import('./features/app/app'));

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Suspense fallback={<GlobalLoading />}>
      <Provider store={configureStore()}>
        <Router>
          <App />
        </Router>
      </Provider>
    </Suspense>
  </MuiThemeProvider>,
  document.getElementById('root'),
);
