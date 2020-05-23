import React from 'react';
import { Provider } from 'react-redux'
import { store } from './_helpers/store'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import Offremanger from './pages/admin/offremanager';
import Homepage from './pages/user/homepage';
import List from './pages/user/list';
import Offreviewer from './pages/user/offredetails';
import Profil from './pages/user/profil';
import Myoffre from './pages/user/myoffre';
const App = () => {

  return (

    <Router  >
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/list/:id" exact component={List} />
        <Route path="/offreviewer/:id" exact component={Offreviewer} />
        <Route path='/admin' exact component={Offremanger} />
        <Route path="/myprofil" exact component={Profil} />
        <Route path="/myoffre" exact component={Myoffre} />
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