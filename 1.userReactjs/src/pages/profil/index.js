import React, { Component } from 'react'

import Layout from '../../layout/index'
import Editform from './compenent/editfrom'
import Listofcategorie from '../../static/cat.json'
import Upfile from './compenent/upfile'
import { connect } from 'react-redux'
import Auth from '../../services/auth'
import WitAuth from "../../lib/withauth";
import { Link } from "react-router-dom"
import Panel from '../../compenets/panel'
import { updateCvFile, getUserByid, updateUser } from '../../redux/user/userAction'
import PropTypes from 'prop-types';

//A page about user data
//صفحة خاص ببيانات المستخدم
class Profilviewer extends Component {
  static propTypes = {
    state: PropTypes.object.isRequired,
    getUserByid: PropTypes.func.isRequired,
    updateCvFile: PropTypes.func.isRequired,
    user: PropTypes.array.isRequired
  };

  state = {
    progress: 0,

  }

  async componentDidMount() {
    await this.props.getUserByid()
  }


  updateUserInfo = (userData) => {
    this.props.updateUser(userData);
  }
  updateCvFile = (formData) => {
    this.props.getUserByid()
    this.props.updateCvFile(formData);
  }

  logout = () => {
    Auth.clearAll();
    this.props.history.push('/')
  }
  render() {
    return (<>
      <Layout>
        <br />
        <div className="w3-margin w3-padding w3-white w3-light-green">
          <h4 className="w3-margin">Vous infos</h4>
        </div>
        <div className="w3-col m8">
  {
 
  //update data
  //تحديث البيانات
  
  }
                   
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
          <Panel title="cv status ">
            <div className="w3-container w3-orange w3-center w3-text-white" style={{ width: ` ${this.state.progress}%` }}>{this.state.progress}%</div>
          </Panel>
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
            />
          </Panel>
          <Panel title="Myoffres">
            <Link className="w3-button w3-orange w3-text-white" to="/my"> Myoffres </ Link>
          </Panel>
          <Panel title="logout">
            <button className="w3-button w3-orange w3-text-white" onClick={this.logout}> Deconnectez</button>
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


export default WitAuth(connect(mapStoreToProps, mapDispatchToProps)(Profilviewer))





