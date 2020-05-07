import React, { Component } from 'react'
import Layout from '../../layout/index'

import { getOffreByCat } from '../../redux/offre/offresAction'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import Listlist from'./compenets/lisList'


class Lists extends Component {



  static propTypes = {
    idCat: PropTypes.number.isRequired,
    state: PropTypes.object.isRequired
  };


  componentDidMount() {

    const idCat = this.props.match.params.id;
    this.props.getOffreByCat(idCat)

  }
  state = {
    offres: []
  }

  render() {

    return (
      <>

        <Layout>

          <div className="w3-white w3-margin">
            <div className="w3-container w3-padding  w3-orange text-white">
              <h4>Offres d'emploi par fonction</h4>
            </div>
            <ul className="w3-ul w3-hoverable w3-white">
              {(this.props.state.offre.offres != null) ?

                <Listlist list={this.props.state.offre.offres} /> : "no Data"}

            </ul>
          </div>

 
        </Layout>

      </>)
  }




}
const mapStoreToProps = state => ({

  state: state
})
const mapDipatchToProps = {
  getOffreByCat
}
export default connect(mapStoreToProps, mapDipatchToProps)(Lists)