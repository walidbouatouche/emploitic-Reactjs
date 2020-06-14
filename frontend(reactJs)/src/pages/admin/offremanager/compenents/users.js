import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


const UsersList = ({ users }) => {

    return (<div>
        UsersList
   	 <table className="w3-table-all w3-width w3-margin-top">

            <thead>
                <tr className="w3-orange w3-text-white">
                    <th> name</th>
                    <th> prenom</th>
                    <th> CV</th>
                    <th> profil</th>
                </tr>
            </thead>
            <tbody>
                {users.map(item =>
                    <tr key={item.id} >
                        <th>{item.nom}</th>
                        <th>{item.prenom}</th>
                        <th>

                            <a onClick={() => window.open(item._cv_link)} >

                                <FontAwesomeIcon icon={faFilePdf} />
                            </a>


                        </th>

                        <th>
                            <Link className="w3-text-black" to={`/userprofil/${item.id}`}  >
                                Profil
   s
                            </Link>
                        </th>

                    </tr>
                )}
            </tbody>
        </table>
    </div>)


}

export default UsersList