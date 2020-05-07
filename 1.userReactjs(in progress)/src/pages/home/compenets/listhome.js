import React from'react'
import { Link } from "react-router-dom"
import PropTypes from "prop-types";
const List =({ list }) => {
  List.propTypes = {
    list: PropTypes.array
  };
    return (
      list.map((item => (<div > 
  
        <li  key={item.id}className="w3-padding-16">
          <Link to={'list/' + item.id}>
            <img src={item.imguri} alt="Image" class="w3-left w3-margin-right" style={{ width: '50px' }} />
            <span className="w3-large w3-text-black"> {item.title}</span>
            <br />
            <span className="w3-text-gray">{item.tags}</span>
          </Link>
        </li>
  
      </div>))))


  }

  export default List ;