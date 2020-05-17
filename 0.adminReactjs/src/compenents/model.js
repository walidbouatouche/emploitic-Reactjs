import React from 'react'



const Model = ({ title, children }) => {

  return (<div>


    <button onClick={() => document.getElementById('id01').style.display = 'block'} className="w3-button w3-black">{title}</button>

    <div id="id01" className="w3-modal w3-border">
      <div className="w3-modal-content">
        <div className="w3-container w3-padding">
          {children}

          <span onClick={() => document.getElementById('id01').style.display = 'none'} className="w3-button w3-display-topright w3-orange">&times;</span>
        </div>
      </div>
    </div>
  </div>

  )

}

export default Model;