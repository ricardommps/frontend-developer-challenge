import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { configureStore } from './store';
import { GlobalLoading } from './components/loading/loading';
import './scss/index.scss';

const App = React.lazy(() => import('./features/app/app'));

ReactDOM.render(
  <Suspense fallback={<GlobalLoading />}>
    <Provider store={configureStore()}>
      <Router>
        <App />
      </Router>
    </Provider>
  </Suspense>,
  document.getElementById('root'),
);
