import React, { useState } from 'react'

const Exp = ({ item, _getId, id }) => {
     // template use for show   deplomes and expeirence
    function getId(id) {
        _getId(id)
        
        
    }
    return (<div>

   <div>
   <b>Title:</b> {item.title} 

   </div>
   <div>
   <b> Description:</b> {item.content} 

   </div>
   <div>
   <b>      location /entreprise:</b> {item.location} 

   </div>
   <div>
   <b>start:</b>{item.start||'no date'} 
               <b>  end:</b> {item.end ||'no date'} 
               {/* {parseInt(item.end.replace('-','').replace('-',''))-parseInt(item.start.replace('-','').replace('-',''))} ) */}
   </div>
             

       
    





        <button className="w3-button w3-red" onClick={() => getId(id)}> x</button>
    </div>)

}

export default Exp