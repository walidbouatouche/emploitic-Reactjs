import React, { useState } from 'react'
import PropTypes from 'prop-types';

const Loginorsingup = ({ loginOrsingup, action }) => {
    Loginorsingup.propTypes = {
        loginOrsingup: PropTypes.func.isRequired,
        action: PropTypes.string.isRequired
    };

    const [mail, setMail] = useState('');  //https://ar.reactjs.org/docs/hooks-intro.html
    const [password, setPassword] = useState('');


    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleEmail = (e) => {
        setMail(e.target.value)
    }

    const _loginOrsingup = (e) => {
        e.preventDefault()
        loginOrsingup({ mail, password })
    }
    return (<div >
        <form onSubmit={_loginOrsingup} className="w3-white w3-padding w3-col m5 w3-margin-left"  >
            <label>Email</label>
            <input onChange={handleEmail} required type="email" class="w3-input w3-border" />
            <label>Password</label>
            <input onChange={handlePassword} required minLength="5" maxLength="10" class="w3-input w3-border" type="password" />
            <br />
            <button class="w3-button w3-orange w3-text-white"> {action}</button>
            <br />
        </form>
    </div>)
}

export default Loginorsingup