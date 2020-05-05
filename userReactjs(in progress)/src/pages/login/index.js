import React, { Component } from 'react'
import Layout from '../../layout/index'
import LoginOrsingup from './compenets/loginOrsingup'
import { singup, login } from '../../redux/user/userAction'
import { connect } from 'react-redux'
import Auth from '../../services/auth'
class LoginOrRegister extends Component {


  componentWillReceiveProps(nextProps) {
    if (nextProps.state.user.floading === true) {
      if (nextProps.state.user.user.token) {
        // when we receive token mean: successfully login
        const { token, userId } = nextProps.state.user.user
        //  we receive data from backend
        Auth.setToken(token);
        Auth.setUserId(userId);
        this.props.history.push('/')
        window.location.reload(); 
     
      
      }


    }
  }


  singup = (user) => {
    this.props.singup(user)
  }


  login = (user) => {
    this.props.login(user)
  }


  render() {

    return (<>

      <Layout>

        <div className=" w3-margin w3-center">
          <div class="w3-container w3-padding  w3-orange text-white">
            <h4>Connexion Ou  fait compte</h4>
          </div>
          <div className=" w3-margin">
            <ul className="w3-ul  w3-center  " >
              <div class="w3-panel w3-pale-red w3-border w3-margin-top">
                {(this.props.state.user.loading === false && this.props.state.user.floading === false)

                  ? (<div>

                    <p className="w3-text-red">




                      something wrong :<br />
                      you choose not good data if you login<br />
                      if signup the email already<br />


                    </p>



                  </div>)
                  : null

                }
                {(this.props.state.user.user == "succes")

                  ? (<div>

                    <p className="w3-text-green">




                      Registration completed successfully
                      
     </p>



                  </div>)
                  : null

                }

                {(this.props.state.user.loading === true)

                  ? (<div>

                    <p className="w3-text-green">


                      Loading ...
                   
     </p>



                  </div>)
                  : null

                }
              </div>

              <LoginOrsingup loginOrsingup={this.login} action={'login'} />

              <LoginOrsingup loginOrsingup={this.singup} action={'singup'} />


              <br />
            </ul>

          </div>


        </div>

      </Layout>

    </>)
  }





}

const mapStoreToProps = state => ({

  state: state
})
const mapDipatchToProps = {
  singup,
  login
}
export default connect(mapStoreToProps, mapDipatchToProps)(LoginOrRegister)