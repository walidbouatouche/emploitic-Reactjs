import React, { useState } from 'react'
import PropTypes from 'prop-types';

const Loginorsingup = ({ loginOrsingup, action }) => {

    const [mail, setMail] = useState('');
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
        <h1> {action} </h1>
            <label>Email</label>
            <input onChange={handleEmail} required type="email" className="w3-input w3-border" />
            <label>Password</label>
            <input onChange={handlePassword} required minLength="5" maxLength="10" className="w3-input w3-border" type="password" />
            <br />
            <button className="w3-button w3-orange w3-text-white"> {action}</button>
            <br />
        </form>
    </div>)
}

export default Loginorsingup