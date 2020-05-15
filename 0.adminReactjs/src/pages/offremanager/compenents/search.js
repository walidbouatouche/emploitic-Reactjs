import React from "react"

const Search = ({ searchOffre }) => {


    function handelChange(e) {
        let char = e.target.value ;
        if(e.target.value.trim() <1){
           char="a"

        }
        searchOffre(char);

    }
    return (<>

        <input onChange={handelChange} placeholder="Search a offre" className="w3-input w3-border w3-padding w3-border" type="text" />


    </>)
}

export default Search;