import React  ,{useState ,useEffect}from'react'
import { Formik, Field, Form} from 'formik';
import * as Yup from 'yup';
import Exp from'./sub-compenent/exp'
import Item from'./sub-compenent/item'
import Accordion from'../../../../compenents/accordion'
 // Only the new thing we used was the formiK library
               
 
 /*   https://jaredpalmer.com/formik/      */

 /* https://jasonwatmore.com/post/2020/04/20/react-formik-combined-add-edit-create-update-form-example */


 const Editfrom =({userinfo,list,updateUser ,userId ,location }) =>{
  const [exp,setExp]=useState(JSON.parse(userinfo._exp))
  const [deplo,setDeplo]=useState(JSON.parse(userinfo._deplo))

    function getOneFieldDeplo(newFlied){
         let newDeplo= Object.assign([],deplo)
         newDeplo.push(newFlied)
         setDeplo(newDeplo)
    
         
    }
   function removeDeplo(index){
 
    let newDeplo=Object.assign([],deplo)
    newDeplo.splice(index,1)
     setDeplo(newDeplo)
    }

    function getOneFieldExp(newFlied){
        let newExp = Object.assign([],exp)
        newExp.push(newFlied)
        setExp(newExp)
   
        
   }
  function removeExp(index){

   let newExp=Object.assign([],exp)
    newExp.splice(index,1)
    setExp(newExp)
   }
    return(<div className="w3-center" >
<div className="w3-col  m11 w3-margin-left w3-white w3-padding">
   
<Formik
enableReinitialize
                initialValues={{
                    nom: userinfo.nom || '',
                    prenom: userinfo.prenom || '',
                    phone: userinfo.phone || '',
                    adresse:userinfo.adresse  || '',
                    cat:userinfo._cat  || ''
          
                }}
                validationSchema={Yup.object().shape({
                nom: Yup.string()
                .required('Nom is required'),
                prenom: Yup.string()
                .required('prenom is required'),
                phone: Yup.number()
                .required('phone is required'),
                adresse: Yup.string()
                .required('adresse is required'),
              
                })}
                onSubmit={fields => {
                    const info= userinfo.info
                    let experience=JSON.stringify(exp)
                    let  deplom=JSON.stringify(deplo)
                    updateUser({...fields,userId,info,experience,deplom})
                             
                }}
                render={({ errors, status, touched }) => (
                    <Form>
                        <div >
                            <label htmlFor="nom">Nom</label>
                            <Field name="nom" type="text" className={'w3-input w3-border' + (errors.nom && touched.nom? ' w3-border w3-border-red' : '')} />
                            {errors.nom && touched.nom ? (<div className="w3-text-red">{errors.nom}</div>) : null}
                            <br />
                        </div>
                        <div >
                            <label htmlFor="prenom">Prenom</label>
                            <Field name="prenom" type="text" className={'w3-input w3-border' + (errors.prenom && touched.prenom ? ' w3-border w3-border-red' : '')} />
                            {errors.prenom && touched.prenom? (<div className="w3-text-red">{errors.prenom}</div>) : null}
                                 <br />                        </div>
                        <div >
                            <label htmlFor="phone">Phone</label>
                            <Field name="phone" type="number" className={'w3-input w3-border' + (errors.phone && touched.phone ? ' w3-border w3-border-red' : '')} />
                            {errors.phone && touched.phone? (<div className="w3-text-red">{"mus number"}</div>) : null}
                         <br />                        </div>
                        <div >
                            <label htmlFor="phone">Domain</label>
                            <br  />
                        <Field as="select" name="cat" >

                        
                {
                list.map((item)=>    
                  
                    <option  key={item.id}value={item.id}>{item.title}</option>)

                }


            
            }
                    
                </Field>
                                </div>

                                <div >
                                <br />  
                            <label htmlFor="adresse">adresse</label>
                            <Field name="adresse" as="select"   className={'w3-input w3-border' + (errors.adresse && touched.adresse ? ' w3-border w3-border-red' : '')} >
                            
                            {
                location.map((item)=>    
                  
                    <option    key={item.id}value={item.label}>{item.label}</option>)

                }                </Field>

                            {errors.adresse && touched.adresse ? (<div className="w3-text-red">{errors.adresse}</div>) : null}

<br />                        </div>
<div className="w3-border w3-margin">


 <Exp getOneField={getOneFieldExp} title={'Experience'}  /> 
{exp.map((item,index)=>
 <Accordion key={index}   title={item.title} id={index+'Exp'}>
      <Item   id={index} item={item} _getId={removeExp} />
 </Accordion>

)}

</div>
<div className="w3-border w3-margin">


 <Exp getOneField={getOneFieldDeplo} title={'Deplome'}  /> 
{deplo.map((item,index)=>
 <Accordion key={index}  title={item.title} id={index + 'Depl'}>
      <Item   id={index} item={item} _getId={removeDeplo} />
 </Accordion>

)}

</div> 
<div >
 <button type="submit"     className="w3-button w3-orange w3-text-white" >Save</button>
                         </div>
                    </Form>
                )}
            />
        </div>

    
    </div>)
}


export default  Editfrom