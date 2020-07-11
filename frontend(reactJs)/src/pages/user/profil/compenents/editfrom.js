import React  ,{useState ,useEffect}from'react'
import { Formik, Field, Form} from 'formik';
import * as Yup from 'yup';
import ExpOrDepl from'./sub-compenents/expOrdepl'
import Item from'./sub-compenents/item'
import Accordion from'../../../../compenents/accordion'
 // Only the new thing we used was the formiK library
               
 
 /*   https://jaredpalmer.com/formik/      */

 /* https://jasonwatmore.com/post/2020/04/20/react-formik-combined-add-edit-create-update-form-example */

 // walid@dd.fr
 //walid@dd.fr
 const Editfrom =({userinfo,list,updateUser ,userId ,location }) =>{

  const [exp,setExp]=useState(JSON.parse(userinfo._exp))
  const [deplo,setDeplo]=useState(JSON.parse(userinfo._deplo))
  const label={fontWeight:'bold',padding:'5px'}
  const borderRaduis={borderRadius:'10px'}
    function getOneFieldDeplo(newFlied){
         let newDeplo= Object.assign([],deplo)
         newDeplo.push(newFlied)
         setDeplo(newDeplo)
    
         
    }
   function removeDeplo(index){
 if(window.confirm("Are you sure")){


    let newDeplo=Object.assign([],deplo)
    newDeplo.splice(index,1)
     setDeplo(newDeplo)

    }
    }

    function getOneFieldExp(newFlied){
        let newExp = Object.assign([],exp)
        newExp.push(newFlied)
        setExp(newExp)
   
        
   }
  function removeExp(index){
    if(window.confirm("Are you sure")){
   let newExp=Object.assign([],exp)
    newExp.splice(index,1)
    setExp(newExp)

    }
   }
    return(<div className="w3-center " >
<div style={{...borderRaduis ,background:"white"}} className="w3-col w3-margin  m11   w3-padding w  w3-border w3-border-orange">
   
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
                    let   entrpName=""
                    updateUser({...fields,entrpName,userId,info,experience,deplom})
                             
                }}
                render={({ errors, status, touched }) => (
                    <Form>
                        <div >
                            <label   style={label} htmlFor="nom">Nom</label>
                            <Field name="nom" type="text" className={'w3-input w3-border' + (errors.nom && touched.nom? ' w3-border w3-border-red' : '')} />
                            {errors.nom && touched.nom ? (<div className="w3-text-red">{errors.nom}</div>) : null}
                            <br />
                        </div>
                        <div >
                            <label   style={label} htmlFor="prenom">Prenom</label>
                            <Field name="prenom" type="text" className={'w3-input w3-border' + (errors.prenom && touched.prenom ? ' w3-border w3-border-red' : '')} />
                            {errors.prenom && touched.prenom? (<div className="w3-text-red">{errors.prenom}</div>) : null}
                                 <br />                        </div>
                        <div >
                            <label  style={label} htmlFor="phone">Phone</label>
                            <Field name="phone" type="number" className={'w3-input w3-border' + (errors.phone && touched.phone ? ' w3-border w3-border-red' : '')} />
                            {errors.phone && touched.phone? (<div className="w3-text-red">{"mus number"}</div>) : null}
                         <br />                        </div>
                        <div >
                            <label   style={label} htmlFor="phone">Domain</label>
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
                            <label   style={label} htmlFor="adresse">Adresse</label>
                            <Field name="adresse" as="select"   className={'w3-input w3-border' + (errors.adresse && touched.adresse ? ' w3-border w3-border-red' : '')} >
                            
                            {
                location.map((item)=>    
                  
                    <option    key={item.id}value={item.label}>{item.label}</option>)

                }                </Field>

                            {errors.adresse && touched.adresse ? (<div className="w3-text-red">{errors.adresse}</div>) : null}

<br />                        </div>

<hr />
<div className=" w3-margin w3-white"  >


 <ExpOrDepl getOneField={getOneFieldExp} title={'Experience'}  /> 
{exp.map((item,index)=>
 <Accordion key={index}   title={index+1+'.'+item.title} id={index+'Exp'}>
      <Item   id={index} item={item} _getId={removeExp} />
 </Accordion>

)}

</div>
<hr />
<div className="  w3-margin  w3-white"  >


 <ExpOrDepl getOneField={getOneFieldDeplo} title={'Deplome'}  /> 
{deplo.map((item,index)=>
 <Accordion key={index}  title={index+1+'.'+item.title} id={index + 'Depl'}>
      <Item   id={index} item={item} _getId={removeDeplo} />
 </Accordion>

)}
<hr />
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