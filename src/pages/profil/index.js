import React, { Component } from 'react'
import Layout from '../../layout/index'
import Editform from './compenent/editfrom'
import Listofcategorie from '../../static/cat.json'
import Upfile from './compenent/upfile'
import { connect } from 'react-redux'
import Auth from '../../services/auth'
import { Redirect } from'react-router-dom'
import { updateCvFile, getUserByid, updateUser } from '../../redux/user/userAction'



class Profilviewer extends Component {

  state = {
    userinfo: [],
    _cv_link: " ",
    progress: 0,
    isAuth:Auth.isAuth()
  }
  componentWillReceiveProps(nextProps) {

    if (nextProps.state.user.user !== undefined
      && nextProps.state.user.user != null) {
      if (nextProps.state.user.user.url != null) {
        this.setState({ _cv_link: nextProps.state.user.user.url })
      }
      else {
        const userData = nextProps.state.user.user[0];
        if (userData === undefined) {
          return false;
        }
        const { _cat, _cv_link } = userData

        if (_cat && _cv_link) {
          this.setState({ progress: 100 })
        }
        else {

          if (_cat) {

            this.setState({ progress: 80 })
          }
          if (_cv_link) {

            this.setState({ progress: 20 })
          }
        }
        this.setState({ _cv_link })
        this.setState({ userinfo: userData })







      }
    }



  }

  async componentWillMount(){

 
    this.setState({isAuth:Auth.isAuth()})
  }
  async componentDidMount() {

    await this.props.getUserByid()
  }


  updateUserInfo = (userData) => {

 
    this.props.updateUser(userData);


  }


  updateCvFile = (formData) => {

    this.props.updateCvFile(formData);
    this.props.getUserByid()
  }


  logout=()=>{
Auth.clearAll();
this.props.history.push('/');

  }

  render() {


    if(!Auth.getToken()){
 
      return(
          <>
<Redirect to="/login"></Redirect>
          </>
)
  }
    return (<>
 
      <Layout>

         <br />
        <div className="w3-margin w3-padding w3-white w3-light-green">
          <h4 className="w3-margin">Vous infos</h4>

        </div>
        <div className="w3-col m8">
          <Editform userId={Auth.getUserId()} updateUser={this.updateUserInfo} list={Listofcategorie} userinfo={this.state.userinfo} />
        </div>

        <div className="w3-col m4">
          <div className="w3-white w3-margin">
            <div className="w3-container w3-padding-16 w3-orange text-white">
              <h4> status de votre cv </h4>
            </div>
            <ul className="w3-ul   w3-white">
              <li className="w3-padding-16">
                <div className="w3-light-grey">

                  <div className="w3-container w3-orange w3-center w3-text-white" style={{ width: ` ${this.state.progress}%` }}>{this.state.progress}%</div>

                </div>
              </li>


            </ul>
          </div>

          <div className="w3-white w3-margin">
            <div className="w3-container w3-padding-16 w3-orange text-white">
              <h4> your cv </h4>
            </div>
            <ul className="w3-ul   w3-white">
              <Upfile userId={Auth.getUserId()} updateCvFile={this.updateCvFile} _cv_link={this.state._cv_link}></Upfile>



            </ul>
          </div>




          <div className="w3-white w3-margin">
            <div className="w3-container w3-padding-16 w3-orange text-white">
              <h4> status de votre cv </h4>
            </div>
            <ul className="w3-ul   w3-white">
              <li className="w3-padding-16">
                <div className="w3-light-grey">

<button onClick={this.logout}> Deconnectez</button>
                </div>
              </li>


            </ul>
          </div>
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
  state: state

})

export default connect(mapStoreToProps, mapDispatchToProps)(Profilviewer)





