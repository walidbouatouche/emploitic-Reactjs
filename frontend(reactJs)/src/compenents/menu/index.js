import React from 'react'
import { Link } from "react-router-dom"

import * as Icon from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Dropdown from '../dropdown'
import Auth from '../../_helpers/auth'
import { Menus } from './compenets/navs'
// The main menu of the page

//The code is clear and simple

const Navabar = () => {

    const menu = [
        {
            id: 1,
            title: "Home",
            to: "/"

        }
    ]

    const usersmenu = [
        {
            id: 1,
            title: "myprofil",
            to: "/myprofil",
            icon: Icon.faEdit

        },
        {
            id: 2,
            title: "myoffre",
            to: "/myoffre",
            icon: Icon.faBusinessTime
        }
    ]
    const recruiterMenu = [
        {
            id: 1,
            title: "profil",
            to: "/rprofil",
            icon: Icon.faEdit

        },
        {
            id: 2,
            title: "recruiter Area",
            to: "/recruiterArea",
            icon: Icon.faCog
        }
    ]


    function logout() {
        // remove user from local storage to log user out

        if (window.confirm("Are you sure !!")) {
            Auth.clearAll();

        }
    }

    function toggleFunction() {
        var x = document.getElementById("navDemo");
        if (x.className.indexOf("w3-show") == -1) {
            x.className = x.className.concat(" w3-show")
        }
        else {
            x.className = x.className.replace("w3-show", "")
        }
    }




    if (!Auth.isAuth()) {
        return (<div className="w3-white w3-padding " style={{ borderBottom: '1px solid orange' }}>
            <Link className="w3-padding" to='/'>
                Home      </Link>
            <Link to='/login' className="w3-right">
                <FontAwesomeIcon className="w3-text-orange" icon={Icon.faUser} />
            </Link>
        </div>)

    }
    return (

        <div>
            <div style={{ borderBottom: '1px solid orange' }} className="w3-top w3-padding w3-white  ">
                <div className="w3-bar" id="myNavbar">
                    <a
                        className="w3-bar-item w3-button w3-orange w3-hide-medium w3-hide-large w3-right"
                        onClick={toggleFunction} title="Toggle Navigation Menu"
                    >
                        <FontAwesomeIcon icon={Icon.faBars} />
                    </a>
                    <Menus.DesktopNavabar menu={menu} />
                    <div style={{ float: "right", marginRight: '150px' }}>
                        <Dropdown title={<FontAwesomeIcon icon={Icon.faUser} />} >
                            <ul className="w3-ul ">
                                {Auth.getRole() === 'user' && <Menus.Usermenu menu={usersmenu} />}
                                {Auth.getRole() === 'r' && <Menus.RecruiterMenu menu={recruiterMenu} />}
                                <a onClick={logout} className="w3-bar-item w3-button w3-hover-orange   ">
                                    <FontAwesomeIcon style={{ marginRight: '20px' }} icon={Icon.faPowerOff} />
                                    Logout
                                </a>
                            </ul>
                        </Dropdown>
                    </div>
                </div>
                <div id="navDemo" className=" w3-bar-block  w3-hide w3-hide-large w3-hide-medium">
                    <Menus.MobilNavabar menu={menu} />
                </div>
            </div>

            <br />

        </div>


    )



}


export default Navabar