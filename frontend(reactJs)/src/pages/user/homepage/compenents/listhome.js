import React from 'react'
import { Link } from "react-router-dom"

const List = ({ list }) => {

    return (
        list.map((item => ( 
            <li key={item.id} className="w3-padding-16 w3-hover-grayscale">
                
                <Link to={'list/' + item.id}>
                    <img src={item.imguri} alt="Image" className="w3-left w3-margin-right  " style={{ width: '50px' }} />
                    <span className="w3-large w3-text-black"> {item.title}</span>
                    <br />
                    <span className="w3-text-gray">{item.tags}</span>
                </Link>
            </li>
         ))))
}
export default List;