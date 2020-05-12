import React from 'react'

export const Alerts = {
    AlertDanger,
    Alertsuccess
}
function AlertDanger({ text }) {
    return (
        <div className="w3-panel w3-pale-red w3-padding">
            <p>{text}</p>
        </div>)
}
function Alertsuccess({ text }) {
    return (
        <div className="w3-panel w3-pale-green w3-padding">
            <p>{text}</p>
        </div>)
}



