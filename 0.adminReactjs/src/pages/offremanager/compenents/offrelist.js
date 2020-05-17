import React from 'react'

import { faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import categorieoffre from '../../../static/cat.json'
import Model from "../../../compenents/model";
import Offreform from '../compenents/offreform';

const OffreList = ({ offrelist, _removeOffre }) => {


    function removeOffre(_id) {
        if (window.confirm(" Are you Sure !!")) {
            _removeOffre(_id);
        }
    }


    return (<>
      
        <table className="w3-table-all w3-width w3-margin-top">
        <Model title={<FontAwesomeIcon icon={faPlus} />}>
                        <Offreform offreinfo={[{}]} list={categorieoffre} />
                    </Model>
            <thead>
                <tr className="w3-orange w3-text-white">
                    <th> Offre</th>
                    <th>Edit</th>
                    <th> Remove</th>
                </tr>
            </thead>
            <tbody>
                {offrelist.map(item =>
                    <tr key={item._id} >
                        <th>{item.titre}</th>
                        <th  >
                        <Model title={<FontAwesomeIcon icon={faEdit} />}>
                        <Offreform offreinfo={item} list={categorieoffre} />
                    </Model>
                  
                            
                            </th>
                        <th onClick={() => removeOffre(item._id)} ><FontAwesomeIcon icon={faTrash} /></th>
                    </tr>
                )}
            </tbody>
        </table>

    </>)
}

export default OffreList