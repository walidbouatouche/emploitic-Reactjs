import React from 'react'
import { Link } from "react-router-dom"
import {   faBars, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 const  Navabar =()=> {
  const menu = [
    {
      id: 1,
      title: " offres d'emploi",
      to:"/"

    }
 
    ]





  function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
      x.className = x.className.concat(" w3-show")
    }
    else {
      x.className = x.className.replace("w3-show", "")
    }
  }
  function DesktopNavabar({ menu }) {
    return (<div>

      {menu.map((menuitem) =>
        (
          <Link to={menuitem.to} key={menuitem.id} className="w3-bar-item w3-button w3-hide-small w3-hover-orange"> {menuitem.title}</Link>
        )
      )}
    </div>)
  }

  function MobilNavabar({ menu }) {
    return (<div>
 

          
      {menu.map((menuitem) =>
        (
          <Link key={menuitem.id}  to={menuitem.to} className="w3-bar-item w3-button w3-hover-orange "> {menuitem.title}</Link>
        )
      )}
<Link to="/profil"className="w3-bar-item w3-text-orange w3-button  w3-right w3-hover--light-green">
            <FontAwesomeIcon icon={faUser} />

          </Link>
    </div>)
  }


  return (
   <div>


      <div className="w3-top w3-padding w3-white w3-border-bottom">


        <div className="w3-bar" id="myNavbar">
          <a
            className="w3-bar-item w3-button w3-orange w3-hide-medium w3-hide-large w3-right"
            onClick={toggleFunction} title="Toggle Navigation Menu"

          >
            <FontAwesomeIcon icon={faBars} />
          </a>
          <a className="w3-bar-item w3-button"><img style={{ height: '30px' }} src="https://www.freepnglogos.com/uploads/w-letter-logo-png/w-letter-letter-designed-musiquedesign-brandcrowd-20.png" /></a>
          <DesktopNavabar menu={menu} />
          <Link to="/profil"className="w3-bar-item w3-text-orange w3-button w3-hide-small w3-right w3-hover--light-green">
            <FontAwesomeIcon icon={faUser} />

          </Link>

        </div>
        <div id="navDemo" className="      w3-bar-block  w3-hide w3-hide-large w3-hide-medium">
          <MobilNavabar menu={menu} />
          

        </div>

      </div>

      <br />
      <br />
      </div>

 )


}


export default Navabar