import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Auth from '../../../../_helpers/auth'
import sendRequest from '../../../../_helpers/sendrequest'
import { dowloadPdfBlob } from '../../../../_helpers/speedFunction'

const UsersList = ({ users, idOffre }) => {
    const openCv = (userId) => {
        // scure_files
        // downloa d pdf from url  with secure  !!

        sendRequest({
            method: 'GET',
            url: `/user/_cv/` + userId,
            responseType: 'blob',
        }).then(({ data }) => {
            dowloadPdfBlob(data, userId)

        }
        )
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