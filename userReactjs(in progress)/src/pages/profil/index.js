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
    progress: 0,

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
      this.props.getUserByid()
    this.props.updateCvFile(formData);
  
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
          <Editform userId={Auth.getUserId()} 
          
          updateUser={this.updateUserInfo} list={Listofcategorie} 
          
          userinfo={
            (
              this.props.state.user.user!=null 
              
               && 
              this.props.state.user.user!=undefined
               &&
               this.props.state.user.user[0]!=null
               &&
               this.props.state.user.user[0]!=undefined
          
      
        
                ) ?     this.props.state.user.user[0] :" "





          } />
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
      
               <Upfile
                userId={Auth.getUserId()}
                updateCvFile={this.updateCvFile}
                _cv_link={
                    (
                  this.props.state.user.user!=null 
                  
                   && 
                  this.props.state.user.user!=undefined
            
                    ) ?((
                   
                      this.props.state.user.user.url !=null 
                     &&  this.props.state.user.user.url !=undefined
                     ) ?
                     this.props.state.user.user.url : this.props.state.user.user[0]._cv_link





                    ) :""
                
                
                
                } 
                
                /> 
 





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





