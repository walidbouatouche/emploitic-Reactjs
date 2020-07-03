import React from 'react'

const Accordion = ({ title, children, id }) => {
    function myFunction(id) {
        var x = document.getElementById(id);
        if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
        } else {
            x.className = x.className.replace(" w3-show", "");
        }
    }

    return (<div className="w3-margin">
        <div onClick={() => myFunction(id)} className="w3-text-white w3-green  w3-padding">{title}</div>
        <div id={id} className="w3-hide w3-container w3-center ">

            {children}


        </div>
    </div>
    )

}

export default Accordion;