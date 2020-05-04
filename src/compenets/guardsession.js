import  Auth   from '../services/auth' ;
import { Redirect } from'react-router-dom'
import React from'react'
export  default  function grauds () { 
    
    

    if(!Auth.isAuth()){
        alert(Auth.isAuth())
        return(
            <>
<Redirect to="/login"></Redirect>
            </>
)
    }

else{return(<div>
    
</div>)}

}