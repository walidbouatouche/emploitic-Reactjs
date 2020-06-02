import React from "react"

const Select = ({ _title, _data, filterOffre }) => {
    function handelChange(e) {
        filterOffre(e.target.value)

    }
    return (<>

        <select value={0} onChange={handelChange} className="w3-select w3-border w3-margin" name="option">
            {_data && _data.map((item) => <option key={item.id} value={item.id}>{item.title}</option>)}

        </select>
    </>)
}

export default Select;