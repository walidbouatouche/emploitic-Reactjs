import React from'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf} from '@fortawesome/free-solid-svg-icons'


const UsersList = ({users}) => {

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
                    <tr key={item._id} >
                        <th>{item.nom}</th>
                        <th>{item.nom}</th>
                        <th  >

                      <a onClick={()=>window.open(item._cv_link)} > 

<FontAwesomeIcon icon={faFilePdf} />
                      </a>


                        </th>
 
                        <th>
                        profil
                        </th>

                    </tr>
                )}
            </tbody>
</table>
   	</div>)


}

export default UsersList