import React  ,{useState ,useEffect}from'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
  //The code is clear and simple
 // الكود واضح وبسيط

 // Only the new thing we used was the formic library
 // فقط الشىء الجديد استعملنا مكتبة فورميك                
 
 /*   https://jaredpalmer.com/formik/      */

 /* https://jasonwatmore.com/post/2020/04/20/react-formik-combined-add-edit-create-update-form-example */


 const Editfrom =({userinfo,list,updateUser ,userId }) =>{

    Editfrom.propTypes = {
        updateUser: PropTypes.func.isRequired,
        list: PropTypes.array.isRequired ,
        userinfo:PropTypes.object.isRequired ,
        userId:PropTypes.string.isRequired
      };
 
    return(<div className="w3-center" >
<div className="w3-col  m11 w3-margin-left w3-white w3-padding">

<Formik
enableReinitialize
                initialValues={{
                    nom: userinfo.nom || '',
                    prenom: userinfo.prenom || '',
                    phone: userinfo.phone || '',
                    adresse:userinfo.adresse  || '',
                    experience:userinfo._exp || '',
                    deplom:userinfo._deplo  || '',
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
                experience: Yup.string()
                .required(' experience is required'),
                deplom: Yup.string()
                .required(' deplom is required'),
                })}
                onSubmit={fields => {
                    updateUser({...fields,userId})
                             
                }}
                render={({ errors, status, touched }) => (
                    <Form>
                        <div >
                            <label htmlFor="nom">nom</label>
                            <Field name="nom" type="text" className={'w3-input w3-border' + (errors.nom && touched.nom? ' w3-border w3-border-red' : '')} />
                            {errors.nom && touched.nom ? (<div className="w3-text-red">{errors.nom}</div>) : null}
                            <br />
                        </div>
                        <div >
                            <label htmlFor="prenom">prenom</label>
                            <Field name="prenom" type="text" className={'w3-input w3-border' + (errors.prenom && touched.prenom ? ' w3-border w3-border-red' : '')} />
                            {errors.prenom && touched.prenom? (<div className="w3-text-red">{errors.prenom}</div>) : null}
                                 <br />                        </div>
                        <div >
                            <label htmlFor="phone">phone</label>
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
                            <Field name="adresse" as="textarea"   className={'w3-input w3-border' + (errors.adresse && touched.adresse ? ' w3-border w3-border-red' : '')} />
                            {errors.adresse && touched.adresse ? (<div className="w3-text-red">{errors.adresse}</div>) : null}

<br />                        </div>


<div >
                            <label htmlFor="experience">  experience(short text)</label>
                            <Field   name="experience"  as="textarea" className={'w3-input w3-border' + (errors.experience && touched.experience ? ' w3-border w3-border-red' : '')} />
                            {errors.experience && touched.experience ? (<div className="w3-text-red">{errors.experience}</div>) : null}

<br />                        </div>

<div >
                            <label htmlFor="deplom"> diplome(short text)</label>
                            <Field name="deplom" as="textarea" className={'w3-input w3-border' + (errors. deplom && touched. deplom ? ' w3-border w3-border-red' : '')} />
                            {errors.deplom && touched.deplom? (<div className="w3-text-red">{errors.deplom}</div>) : null}

<br />                        </div>
                           
                        <div >
                            <button type="submit"     className="w3-button w3-orange w3-text-white" >Save</button>
                            <button type="reset"    className="w3-button w3-gray w3-margin w3-text-white">Reset</button>
                        </div>
                    </Form>
                )}
            />
        </div>
    </div>)
}


export default  Editfrom