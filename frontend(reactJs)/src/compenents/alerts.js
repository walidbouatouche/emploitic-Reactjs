import React, { useState } from 'react'

export const Alerts = {
    AlertDanger,
    Alertsuccess
}

function AlertDanger({ text }) {
    const [display, setDisplay] = useState("block")
    setTimeout(() => {
        setDisplay("none")
    }, 1000)
    return (
        <div className="w3-panel w3-pale-red w3-padding-16 w3-animate-top" style={{ display: display }}>
            <p>{text}</p>
        </div>)
}
function Alertsuccess({ text }) {
    const [display, setDisplay] = useState("block")
    setTimeout(() => {
        setDisplay("none")
    }, 1000)
    return (
        <div className="w3-panel w3-pale-green w3-padding-16  w3-animate-top" style={{ display: display }}>
            <p>{text}</p>
        </div>)
}



