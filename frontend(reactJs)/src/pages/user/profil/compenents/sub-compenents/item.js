import React, { useState } from 'react'
import Fieldset from '../../../../../compenents/fieldset'
const Exp = ({ item, _getId, id }) => {
    // template use for show   deplomes and expeirence
    function getId(id) {
        _getId(id)


    }
    const wordWrap = { textAlign: 'justify', wordWrap: 'break-word' }
    return (<div   >
        <Fieldset title={<b>Title:</b>} >
            <p style={wordWrap}>
                {item.title}

            </p>
        </Fieldset>



        <Fieldset title={<b> Description:</b>} >
            <p style={wordWrap} >
                {item.content}
            </p>
        </Fieldset>


        <Fieldset title={<b>location /entreprise:</b>} >
            <p style={wordWrap} >
                {item.location}
            </p>
        </Fieldset>
 
            <b>start:</b> 
                {item.start || 'no date'}
          
            <b>  end:</b> {item.end || 'no date'} 
      


        <button className="w3-button w3-red w3-right w3-margin" onClick={() => getId(id)}> x</button>
    </div>)

}

export default Exp