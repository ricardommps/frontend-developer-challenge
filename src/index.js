import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { GlobalLoading } from './components/loading/loading';
import './scss/index.scss';

const App = React.lazy(() => import('./features/app/app'));

ReactDOM.render(
    <Suspense fallback={<GlobalLoading />}>
      <Router>
          <App />
        </Router>
    </Suspense>,
    document.getElementById('root'),
  );
