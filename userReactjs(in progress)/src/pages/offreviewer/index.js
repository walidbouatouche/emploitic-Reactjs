import React, { Component } from 'react'
import Layout from '../../layout/index'
import { faMapMarkerAlt, faClock, faBookmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getOffreById ,postulerOffre } from '../../redux/offre/offresAction'
import { connect } from 'react-redux'




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
            {(this.props.state.offre.offres != null && this.props.state.offre.offres != undefined) ? <List  postulerOffre={this.postuler} list={this.props.state.offre.offres} /> : "no data"}
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






function List({ list ,postulerOffre}) {
 const apply=(id)=>{
  postulerOffre(id)
 }
  return (
    list.map((item => (<div>

      <li class="w3-padding-16 w3-border-light-gray w3-border-top">
        <button  onClick={ ()=>apply(item._id)} class="w3-button w3-orange w3-text-white w3-right">Postuler</button>

        <img src={item.imguri} alt="Image" class="w3-left w3-margin-right" style={{ width: '50px' }} />
        <span class="w3-large"> {item.titre}</span>
        <br />
        <span>{item.entreprise}</span>
        <div class="w3-row">
          <div class="w3-col  m11  ">
            <div class="w3-row">
              <br />

              <div class="w3-col  m8">

                <span className="w3-margin w3-text-gray"></span>

              </div>

              <br />
              <br />
              <div class="w3-col  m3  ">
                <p className="w3-text-gray">  <span className="w3-margin"><FontAwesomeIcon icon={faMapMarkerAlt} /></span>{item.location}</p>
              </div>
              <div class="w3-col  m5">
                <p className="w3-text-gray">
                  <span className="w3-margin">Date d'expiration: </span>
                  {item.date_f}</p>
              </div>
              <div class="w3-col  m4">
                <p className="w3-text-gray"> <span className="w3-margin"><FontAwesomeIcon icon={faBookmark} /></span>{item.type}</p>
              </div>
            </div>
          </div>
        </div>
      </li>
      <div className="w3-margin-top w3-padding w3-white  ">
        <h4 className="w3-margin">Description d 'offre:</h4>
        {item.description}
      </div>


    </div>))))
}