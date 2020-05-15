import React, { useState } from "react"

const Moreoffre = ({ _moreoffre ,limit }) => {

    function handelClick() {
       
        _moreoffre(limit);

    }
    return (<>

        <div className="w3-bar w3-padding " style={{ margin: 'auto' }}>
            <a onClick={handelClick} className="w3-button w3-orange w3-margin"> More offres...</a>

        </div>

    </>)
}

export default Moreoffre;