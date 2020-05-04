import  Auth   from '../services/auth' ;
import { Redirect } from'react-router-dom'

export const Grauds=()=>{  
    if(!Auth.isAuth()){
        alert(!Auth.isAuth())
        return(
            <>
<Redirect to="/login"></Redirect>
            </>
)
    }

else{return(<div>
    
</div>)}

}