import React from 'react'

const UpdateInfo = ({ userUpdateInfo }) => {

    return (<div>
        <ul  className="w3-ul ">
            <li className="w3-text-orange ">  <span className="w3-text-black  w3-margin-right"> Date of signup : </span>  {JSON.parse(userUpdateInfo)[0].creatAt}</li>
            <li className="w3-text-orange " > <span className="w3-text-black w3-margin-right"> last update : </span>  {JSON.parse(userUpdateInfo)[0].updateAt}</li>
        </ul>

    </div>)

}

export default UpdateInfo 