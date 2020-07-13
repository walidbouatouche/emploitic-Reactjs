import React  ,{useState ,useEffect}from'react'
import { Formik, Field, Form} from 'formik';
import * as Yup from 'yup';
 
 // Only the new thing we used was the formiK library
               
 
 /*   https://jaredpalmer.com/formik/      */

 /* https://jasonwatmore.com/post/2020/04/20/react-formik-combined-add-edit-create-update-form-example */

 
 const Editfrom =({userinfo,list,updateUser ,userId ,location }) =>{

 
  const label={fontWeight:'bold',padding:'5px'}
  const borderRaduis={borderRadius:'10px'}
    
    return(<div className="w3-center " >
<div style={{...borderRaduis ,background:"white"}} className="w3-col w3-margin  m11   w3-padding w  w3-border w3-border-orange">
   
<Formik
enableReinitialize
 initialValues={{
                    nom: userinfo.nom || '',
                    prenom: userinfo.prenom || '',
                    phone: userinfo.phone || '',
                    adresse:userinfo.adresse  || '',
                    entrpName:userinfo.entrpName  || ''
           
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
                entrpName: Yup.string()
                .required('entrp Name is required'),
              
                })
      
                   }
                onSubmit={fields => {
                    const info= userinfo.info
                    let experience=userinfo._exp
                    let  deplom=userinfo._deplo
                    let cat=userinfo._cat
                    updateUser({...fields,cat,userId,info,experience,deplom})
                             
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
                            {errors.phone && touched.phone? (<div className="w3-text-red">{errors.entrpName}</div>) : null}
                         <br />                        </div>
                 
                         <div >
                            <label  style={label} htmlFor="  entrpName">  entrp Name</label>
                            <Field name="entrpName" className={'w3-input w3-border' + (errors.entrpName && touched.entrpName ? ' w3-border w3-border-red' : '')} />
                            {errors.entrpName && touched.entrpName? (<div className="w3-text-red">{errors.entrpName}</div>) : null}
                         <br />                        </div>
                 
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