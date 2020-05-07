import React, { Component } from 'react'
import Layout from '../../layout/index'

import { getOffreById ,postulerOffre } from '../../redux/offre/offresAction'
import { connect } from 'react-redux'
import _Offrevwier from'./compenets/offrevwier'


class Offreviewer extends Component {


  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getOffreById(id)

  }
  postuler=(id)=>{
    this.props.postulerOffre(id)
  }

  render() {

    return (<>

      <Layout>

        <div className=" w3-margin">
          <br />
          <ul className="w3-ul  w3-white">
            {(this.props.state.offre.offres != null && this.props.state.offre.offres != undefined) ? <_Offrevwier postulerOffre={this.postuler} list={this.props.state.offre.offres} /> : "no data"}
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
  getOffreById ,
  postulerOffre
}
export default connect(mapStoreToProps, mapDipatchToProps)(Offreviewer)






