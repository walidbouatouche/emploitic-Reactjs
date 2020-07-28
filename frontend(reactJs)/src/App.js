import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux'
import { store } from './_helpers/store'
import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Offremanger from './pages/recruiterArea/offremanager';
import userprofil from './pages/recruiterArea/userprofil';
import Homepage from './pages/user/homepage';
import List from './pages/user/list';
import Offreviewer from './pages/user/offredetails';
import Profil from './pages/user/profil';
import Myoffre from './pages/user/myoffre';
import RecruiterProfil from './pages/recruiterArea/recruiteprofil';
import Search from './pages/user/search';
import OffreByR from './pages/user/offrebyrecruiter';
import Login from './pages/login';
import { UserRoute, AdminRoute, RecruiterRoute } from './_helpers/privateroute'
import sendRequest from './_helpers/sendrequest'
import Spinner from './compenents/spinner'
const App = () => {
  

/////////////////////////////
  const [loading, setLoading] = useState(true)
  useEffect(() => {
 // first loading connect to data base
    sendRequest({
      method: 'GET',
      url: `/offre/getoffrebycat/1`
    }).then(() => {

      setLoading(false)

    }, () => {
      setLoading(false)
    }

    )

  }, [])

 ///////////////////
  if (loading) {
    return (<div >

     Emploitic...Loading Data From ... Server... take only 30 second
      <Spinner></Spinner>
    </div>)
  }

  else {
    // if server good connected show hole app
    return (



      <Router >
        <Switch>

          <Route path="/" exact component={Homepage} />
          <Route path="/login" exact component={Login} />

          <Route path="/offrebyR/:id" exact component={OffreByR} />
          <Route path="/list/:id" exact component={List} />
          <Route path="/offreviewer/:id" exact component={Offreviewer} />
          <Route path="/search/" exact component={Search} />

          <RecruiterRoute path='/recruiterArea' exact component={Offremanger} />
          <RecruiterRoute path='/userprofil/:id' exact component={userprofil} />
          <RecruiterRoute path="/rprofil" exact component={RecruiterProfil} />
          <UserRoute path="/myprofil" exact component={Profil} />
          <UserRoute path="/myoffre" exact component={Myoffre} />




          <Redirect to="/home" />
        </Switch>
      </Router>


    );
  }
}

const AppWithStore = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )

}

export default AppWithStore;