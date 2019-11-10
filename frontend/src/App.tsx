import * as React from 'react';
import './App.scss';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { FallbackLoader } from './components/items/Loader';

const App: React.FC = () => {
  return (
    <HashRouter>
      <React.Suspense fallback={FallbackLoader}>
        <Switch>
          <Route />
        </Switch>
      </React.Suspense>
    </HashRouter>
  );
};

export default App;
