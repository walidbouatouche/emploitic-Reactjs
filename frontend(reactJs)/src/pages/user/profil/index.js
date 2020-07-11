import React, { Component } from 'react'

import Layout from '../../../layout'
import Editform from './compenents/editfrom'
import Listofcategorie from '../../../static/cat.json'
import location from '../../../static/location.json'

import { connect } from 'react-redux'
import Auth from '../../../_helpers/auth'
import Panel from '../../../compenents/panel'
import { Alerts } from '../../../compenents/alerts'
import Spinner from '../../../compenents/spinner'
import { _userAction } from '../../../redux/_actions/user.action'

import Upfile from './compenents/upfile'

import UpdateInfo from './compenents/updateInfo'
const updateCvFile = _userAction.updateCvFile,
  getUserByid = _userAction.getUserByid,
  updateUser = _userAction.updateUser;

// here can user update his infos


// We used the old method for you to diversify only (class)
class Profilviewer extends Component {

  async componentDidMount() {

    //Get the  ID from  the storge and call function  from props
    await this.props.getUserByid(Auth.getUserId())
  }

  updateUserInfo = (userData) => {
    this.props.updateUser(userData);
  }
  updateCvFile = (formData) => {
    this.props.updateCvFile(formData, Auth.getUserId());
  }

  render() {
    return (<>
      <Layout>
        <br />
        <div className="w3-margin w3-padding w3-white ">
          <h4 className="w3-margin">Vos infos</h4>
        </div>
        <div className="w3-col m8">
          {this.props.state.user.loading && <Spinner />}
          {this.props.state.user.sucess && <Alerts.Alertsuccess text={'succes'} />}
          {this.props.state.user.user && <Editform userId={Auth.getUserId()}
            updateUser={this.updateUserInfo} list={Listofcategorie}
            location={location}
            userinfo={
              (
                this.props.state.user.user != null

                &&
                this.props.state.user.user != undefined
                &&
                this.props.state.user.user[0] != null
                &&
                this.props.state.user.user[0] != undefined
              ) ? this.props.state.user.user[0] : " "

            } />}
        </div>

        <div className="w3-col m4">

          <Panel title={<h6 className="w3-text-white">Your cv</h6>} >
            <Upfile
              token={Auth.getToken()}
              userId={Auth.getUserId()}
              updateCvFile={this.updateCvFile}
              _cv_link={
                (
                  this.props.state.user.user != null

                  &&
                  this.props.state.user.user != undefined

                ) ? ((

                  this.props.state.user.user.url != null
                  && this.props.state.user.user.url != undefined
                ) ?
                  this.props.state.user.user.url : this.props.state.user.user[0]._cv_link
                  ) : ""
              }
            /*   
             * [0] the data comme as array  with 1 object 
             * for target the properties we must use target by array-like
       
            */

            />
          </Panel>
          <Panel title={<h6 className="w3-text-white">update info</h6>}>
            {(
              this.props.state.user.user != null

              &&
              this.props.state.user.user != undefined

            ) ? <UpdateInfo userUpdateInfo={this.props.state.user.user[0].info} /> : null}

          </Panel>
        </div>
      </Layout>
    </>)
  }




}


const mapDispatchToProps = {
  updateCvFile,
  getUserByid,
  updateUser
}

const mapStoreToProps = state => ({
  state: state,
  user: state.user

})


export default connect(mapStoreToProps, mapDispatchToProps)(Profilviewer)





