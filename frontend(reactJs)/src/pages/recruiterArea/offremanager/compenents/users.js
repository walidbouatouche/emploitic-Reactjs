import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Auth from '../../../../_helpers/auth'

const UsersList = ({ users }) => {
    const openCv = (userId) => {
        // scure_files
        const data = {
            userId,
            token: Auth.getToken()
        }
        const _data = JSON.stringify(data)
        window.open('http://localhost:3000/_pdf/' + _data);
    }
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

                            <a onClick={() => openCv(item.id)} >

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