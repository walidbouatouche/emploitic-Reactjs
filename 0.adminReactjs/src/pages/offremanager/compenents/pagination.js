import React from "react"

const Pagination = ({ searchOffre }) => {


    function handelChange(e) {
        searchOffre(e.target.value);

    }
    return (<>

<div className="w3-bar w3-padding " style={{margin:'auto'}}>
  <a href="#" className="w3-button w3-orange w3-margin">&laquo;</a>
 
  <a href="#" className="w3-button w3-orange w3-margin">&raquo;</a>
</div>

    </>)
}

export default Pagination;