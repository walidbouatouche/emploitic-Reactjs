import React from 'react'

const Fieldset= ({   title ,children}) => {
    return (
<fieldset> 
    <legend>{title}</legend>
{ children}
</fieldset>    )
}

export default Fieldset