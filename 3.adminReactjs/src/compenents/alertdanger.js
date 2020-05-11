import React from 'react'

const AlertDanger = ({ text }) => {
    return (
        <div className="w3-panel w3-pale-red w3-padding">
            <p>{text}</p>
        </div>)
}

export default AlertDanger