import React ,{Component}from'react'
import Layout from '../../layout/index'
import LoginOrsingup from './compenets/loginOrsingup'
import{singup ,login} from'../../redux/user/userAction'
import{connect} from'react-redux'
import Auth from'../../services/auth'
class LoginOrRegister extends Component {


  componentWillReceiveProps(nextProps){
 
 if (nextProps.state.user.loading === false && nextProps.state.user.floading === false) {
  // alert("your data is inncorrect")
}
if (nextProps.state.user.floading === true) {
   if(nextProps.state.user.user.token) {

    
    const  {token, userId} = nextProps.state.user.user
 
   Auth.setToken(token);
   Auth.setUserId(userId);
 
        alert(" Login Seccuffuly")
        
        this.props.history.push('/')
   return false
      }

      if (nextProps.state.user.user=="succes"){

      alert(" Singup Seccuffly Connetez vous");

      }


      return false  ;


  
}
}

  singup=(user)=>{
 
    this.props.singup(user)
  }
 login=(user)=>{
 
    this.props.login(user)
  }


render(){

    return(<>
  
<Layout>

<div className=" w3-margin w3-center">
        <div class="w3-container w3-padding  w3-orange text-white">
          <h4>Connexion Ou  fait compte</h4>
        </div>
        <div className=" w3-margin">
        <ul className="w3-ul  w3-center  " >
<LoginOrsingup  loginOrsingup={this.login} action={'login'}/>
 
<LoginOrsingup  loginOrsingup={this.singup}  action={'singup'}/>
 
<br />
        </ul>
        
      </div>


      </div>
      <br />
      <br/>
      <p>
{(this.props.state.user.loading === false && this.props.state.user.floading === false )

? (<div>
<p className="w3-padding w3-text-red">  something worng</p>

</div>)
:null

}
</p>
  
</Layout>
    
    </>)
}




}

const  mapStoreToProps=state=>({

  state:state
})
const mapDipatchToProps={
  singup,
  login
}
export default connect(mapStoreToProps,mapDipatchToProps) (LoginOrRegister)