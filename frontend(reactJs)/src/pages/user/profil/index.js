import React, { Component } from 'react'

import Layout from '../../../layout'
import Editform from './compenent/editfrom'
import Listofcategorie from '../../../static/cat.json'
import Upfile from './compenent/upfile'
import { connect } from 'react-redux'
import Auth from '../../../_helpers/auth'
import Panel from '../../../compenents/panel'
import { _userAction } from '../../../redux/_actions/user.action'

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
        <div className="w3-margin w3-padding w3-white w3-light-green">
          <h4 className="w3-margin">Vous infos</h4>
        </div>
        <div className="w3-col m8">

          <Editform userId={Auth.getUserId()}
            updateUser={this.updateUserInfo} list={Listofcategorie}
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

            } />
        </div>

        <div className="w3-col m4">

          <Panel title="up Your cv">
            <Upfile

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





