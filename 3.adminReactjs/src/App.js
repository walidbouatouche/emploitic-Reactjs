import React from 'react';
import { Provider } from 'react-redux'
import { store } from './_helpers/store'
const App = () => {

  return (
    <div>
      hallo Admin
	  </div>);

}

const AppWithStore = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )

}

export default AppWithStore;