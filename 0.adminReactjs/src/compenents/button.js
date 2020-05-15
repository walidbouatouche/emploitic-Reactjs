import React from 'react'

const RestButton= ({_onClick ,title}) => {
    return (
    <button  onClick={_onClick} className="w3-margin">{title}</button>
    )
}

export default  RestButton