import React, { useState } from 'react'


const PasswordRest = ({ restPass }) => {
    const [email, setEmail] = useState()

    function onChangePass({ target }) {
        setEmail(target.value)
    }
    function _restPass(e) {
        e.preventDefault()
        restPass(email)
    }
    return (<div>
        <form onSubmit={_restPass} className="w3-white w3-padding w3-col m5 w3-margin-left"  >

            <p> forget password</p>
            <input onChange={onChangePass} required type="email" className="w3-input w3-border" />
            <br />
            <button className="w3-button w3-orange w3-text-white"> Send</button>

        </form>
    </div>)
}

export default PasswordRest