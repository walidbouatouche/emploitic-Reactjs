import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom"

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
        <Link key={menuitem.id} to={menuitem.to} className="w3-bar-item w3-button w3-hover-orange "> {menuitem.title}</Link>
      )
    )}

  </div>)
}


function Usermenu({ menu }) {
  return (<div>
    {menu.map((menuitem) =>
      (
        <Link key={menuitem.id} to={menuitem.to} className="w3-bar-item w3-button w3-hover-orange   ">
          <FontAwesomeIcon style={{ marginRight: '20px' }} icon={menuitem.icon} />
          {menuitem.title}
        </Link>
      )
    )}

  </div>)
}

function RecruiterMenu({ menu }) {
  return (<div>
    {menu.map((menuitem) =>
      (
        <Link key={menuitem.id} to={menuitem.to} className="w3-bar-item w3-button w3-hover-orange   ">
          <FontAwesomeIcon style={{ marginRight: '20px' }} icon={menuitem.icon} />
          {menuitem.title}
        </Link>
      )
    )}

  </div>)

}


export const Menus = {
  DesktopNavabar,
  MobilNavabar,
  Usermenu,
  RecruiterMenu

}