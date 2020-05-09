import React, { Component } from 'react'
import Menu from '../compenets/navigation'
import Rightside from '../compenets/rightside'
import Footer from '../compenets/footer'

class Layout extends Component {

  render() {
    return (
      <>
        <Menu />
        <div className="w3-row">
          <div className="w3-col  l9 w3-margin-top">
            {this.props.children}
          </div>
          <Rightside />
        </div>
        <Footer />
      </>
    );
  }
}

export default Layout