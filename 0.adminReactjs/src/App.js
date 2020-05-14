import React from 'react';
import { Provider } from 'react-redux'
import { store } from './_helpers/store'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import Offremanger from './pages/offremanager';
const App = () => {

  return (

    <Router>
      <Switch>
        <Route path="/" exact component={Offremanger} />
      </Switch>
    </Router>


  );

}

const AppWithStore = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )

}

export default AppWithStore;