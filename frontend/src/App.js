import React, { Component } from 'react'
import './App.scss'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { CradleLoader } from './components/items/Loader'

const Job = React.lazy(() => import('./containers/Job'))

class App extends Component {
  render(){
    return (
      <HashRouter>
        <React.Suspense fallback={CradleLoader}>
          <Switch>
            <Route path="/" name="Job" component={Job} />
          </Switch>
        </React.Suspense>
      </HashRouter>
    )
  }
}

export default App;
