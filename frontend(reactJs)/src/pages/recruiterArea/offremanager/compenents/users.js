import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Auth from '../../../../_helpers/auth'
import sendRequest from '../../../../_helpers/sendrequest'
const UsersList = ({ users, idOffre }) => {
    const openCv = (userId) => {
        // scure_files
        // downloa d pdf from url  with secure  !!
        const data = {
            userId,
            token: Auth.getToken(),
            idOffre
        }
        const _data = JSON.stringify(data)


        sendRequest({
            method: 'GET',
            url: `/user/_cv/` + _data,
            responseType: 'blob',
        }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', userId + '.pdf');
            document.body.appendChild(link);
            link.click();

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