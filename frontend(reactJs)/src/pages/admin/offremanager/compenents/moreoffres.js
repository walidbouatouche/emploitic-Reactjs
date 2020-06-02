import React from "react"

const Moreoffre = ({ _moreOffre, limit }) => {

    function handelClick() {

        _moreOffre(limit);

    }
    return (<>

        <div className="w3-bar w3-padding " style={{ margin: 'auto' }}>
            <a onClick={handelClick} className="w3-button w3-orange w3-margin"> More offres...</a>

        </div>

    </>)
}

export default Moreoffre;