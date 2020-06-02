import React from 'react'

const Button = ({ onClick, title }) => {
    return (
        <button onClick={onClick} className="w3-margin">{title}</button>
    )
}

export default Button