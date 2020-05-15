import React from "react"

const Search = ({ searchOffre , _placeholder}) => {


    function handelChange(e) {
        let char = e.target.value ;
     
        searchOffre(char);

    }
    return (<>

        <input onChange={handelChange} placeholder={_placeholder} className="w3-input w3-border w3-padding w3-border w3-margin" type="text" />


    </>)
}

export default Search;