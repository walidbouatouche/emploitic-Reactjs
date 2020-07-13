import React from 'react'

const Model = ({ title, children, id }) => {
  return (<div>
    <span onClick={() => document.getElementById(id).style.display = 'block'} className="w3-text-black ">{title}</span>
    <div id={id} className="w3-modal w3-border">
      <div style={{ borderRadius: "10px" }} className="w3-modal-content">
        <div className="w3-container w3-padding">
          {children}
          <span style={{ marginRight: "10px", borderRadius: "10px", marginTop: "10px" }} onClick={() => document.getElementById(id).style.display = 'none'} className="w3-button w3-display-topright w3-red ">&times;</span>
        </div>
      </div>
    </div>
  </div>
  )

}

export default Model;