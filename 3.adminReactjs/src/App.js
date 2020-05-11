import React from 'react';
import { Provider } from 'react-redux'
import { store } from './_helpers/store'
import Offremanger from './pages/offremanager';
const App = () => {

  return (
<Offremanger />);

}

const AppWithStore = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )

}

export default AppWithStore;