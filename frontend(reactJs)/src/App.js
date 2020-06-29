import React from 'react';
import { Provider } from 'react-redux'
import { store } from './_helpers/store'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import Offremanger from './pages/admin/offremanager';
import userprofil from './pages/admin/userprofil';
import Homepage from './pages/user/homepage';
import List from './pages/user/list';
import Offreviewer from './pages/user/offredetails';
import Profil from './pages/user/profil';
import Myoffre from './pages/user/myoffre';
import Login from './pages/login';
import { UserRoute, AdminRoute } from './_helpers/privateroute'
const App = () => {

  return (

    <Router >
      <Switch>
        <UserRoute path="/" exact component={Homepage} />
        <UserRoute path="/list/:id" exact component={List} />
        <UserRoute path="/offreviewer/:id" exact component={Offreviewer} />
        <AdminRoute path='/admin' exact component={Offremanger} />
        <AdminRoute path='/userprofil/:id' exact component={userprofil} />
        <UserRoute path="/myprofil" exact component={Profil} />
        <UserRoute path="/myoffre" exact component={Myoffre} />
        <Route path="/login" exact component={Login} />
        <Route exact component={Homepage} />
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