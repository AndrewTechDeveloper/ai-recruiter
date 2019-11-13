import * as React from 'react';
import './App.scss';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { FallbackLoader } from './components/items/Loader';
const Job = React.lazy(() => import('./containers/Job'));

const App: React.FC = () => {
  return (
    <HashRouter>
      <React.Suspense fallback={FallbackLoader}>
        <Switch>
          <Route path="/" name="Job" component={Job} />
        </Switch>
      </React.Suspense>
    </HashRouter>
  );
};

export default App;
