import React ,{Component}from'react'
import Layout from '../../layout/index'
import { faMapMarkerAlt ,faClock ,faBookmark} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Offreslist=[
    {
        id:1,
        title:"Développeur Front-end",
        tags:"Legal Doctrine",
        imguri:"https://www.emploitic.com/attachments/company_logo/logo_3601120_large.jpg"
    },

    {
        id:2,
        title:"Commercial, Marketing, Communication  Création",
        tags:"Commercial, Marketing, Communication  Création",
        imguri:"https://www.emploitic.com/images/finder/profession/356.png"
    },
    {
        id:3,
        title:"Ingénierie, Industrie, Construction",
        tags:"Ingénierie, Industrie, Construction",
        imguri:"https://www.emploitic.com/images/finder/profession/367.png"
    },
    {
        id:4,
        title:"Informatique, Télécommunication  Réseaux",
        tags:"Informatique, Télécommunication  Réseaux",
        imguri:"https://www.emploitic.com/images/finder/profession/364.png"
    },
    {
        id:5,
        title:"Santé, Médical, Pharmaceutique, Délégué médical",
        tags:"Santé, Médical, Pharmaceutique, Délégué médical",
        imguri:"https://www.emploitic.com/images/finder/profession/375.png"
    },
    {
        id:6,
        title:"Autres",
        tags:"Autres",
        imguri:"https://www.emploitic.com/images/finder/profession/377.png"
    }
]


function List({list}){

    return(
    list.map((item=>(<div>

<li class="w3-padding-16 w3-border-light-gray w3-border-top">
            <img src={item.imguri} alt="Image" class="w3-left w3-margin-right" style={{width:'50px'}}  />
            <span class="w3-large"> {item.title}</span>
            <br />
            <span>{item.tags}</span>
            <div class="w3-row">
            <div class="w3-col  m8  ">
            <div class="w3-row">
            <br/>
  <div class="w3-col  m4  ">
    <p className="w3-text-gray">  <span className="w3-margin"><FontAwesomeIcon icon={faMapMarkerAlt  } /></span> Alger, Algérie</p>
  </div>
  <div class="w3-col  m4">  
    <p className="w3-text-gray">
    <span className="w3-margin"><FontAwesomeIcon icon={faClock } /></span>
Aujourd'hui</p>
  </div>
  <div class="w3-col  m4">  
    <p className="w3-text-gray"> <span className="w3-margin"><FontAwesomeIcon icon={faBookmark } /></span>Débutant / Junior</p>
  </div>
</div>
</div>
</div>
          </li>


    </div>))))
}
class MyLists extends Component {


render(){

    return(<>
  
<Layout>

<div class="w3-white w3-margin">
        <div class="w3-container w3-padding  w3-light-green text-white">
          <h4>mes offres postoler</h4>
        </div>
        <ul class="w3-ul w3-hoverable w3-white">
        <List list={Offreslist} />
        </ul>
      </div>
     

      <div class="w3-bar">

  <a href="#" class="w3-button w3-green w3-margin">1</a>
  <a href="#" class="w3-button">2</a>
  <a href="#" class="w3-button">3</a>
  <a href="#" class="w3-button">4</a>

</div>
</Layout>
    
    </>)
}




}

export default MyLists