import React from 'react'



const DropDown = ({ title, children, id }) => {
    function myFunction() {
        var x = document.getElementById("Demo");
        if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
        } else {
            x.className = x.className.replace(" w3-show", "");
        }
    }

    return (



        <div className="w3-dropdown-click">
            <button onClick={myFunction} className="w3-button  w3-text-orange">{title}</button>
            <div id="Demo" className="w3-dropdown-content w3-bar-block w3-card-4 w3-animate-zoom">
                {children}
            </div>
        </div>

    )

}

export default DropDown;