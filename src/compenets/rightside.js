import React from 'react'





export default class  Rightside extends React.Component{





    render(){


    return(
        
    
  
 <>


    <div className="w3-col  l3  w3-margin-top">
   
    
    <div className="w3-white w3-margin">
        <div className="w3-container w3-padding-16 w3-orange text-white">
          <h4>Recherche avancée
</h4>
        </div>
        <ul className="w3-ul   w3-white">
          <li className="w3-padding-16">
          <input className="w3-input w3-border" placeholder="Mots clés, compétences, métier" type="text"  />
            <br />
            <button className="w3-button w3-orange w3-text-white">Chercher</button>

          </li>
       
        
        </ul>
      </div>
      <hr />

      <div className="w3-white w3-margin">
        <div className="w3-container w3-padding w3-orange text-white">
          <h4>Invitez vos amis
</h4>
        </div>
        <ul className="w3-ul w3-hoverable w3-white">
          <li className="w3-padding-16">
            <img src="https://www.emploitic.com/components/com_invitic/images/gmail.png" alt="Image" className="w3-left w3-margin-right" style={{width:'50px'}}  />
            <span className="w3-large">gmail</span>
            <br />
            <span>Pour inviter </span>
          </li>
          <li className="w3-padding-16">
            <img src="https://www.emploitic.com/components/com_invitic/images/hotmail.png" alt="Image" className="w3-left w3-margin-right" style={{width:'50px'}}  />
            <span className="w3-large">hotmail</span>
            <br />
            <span>Pour inviter </span>
          </li>
          <li className="w3-padding-16">
            <img src="https://www.emploitic.com/components/com_invitic/images/yahoo.png" alt="Image" className="w3-left w3-margin-right" style={{width:'50px'}}  />
            <span className="w3-large">yahoo</span>
            <br />
            <span>Pour inviter </span>
          </li>
        
        </ul>
      </div>
      <hr />
    </div>
    
    
    
    
    </>
    
    )
    }
}



