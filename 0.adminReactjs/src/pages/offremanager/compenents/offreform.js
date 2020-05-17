import React  from'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
  //The code is clear and simple
 // الكود واضح وبسيط

 // Only the new thing we used was the formic library
 // فقط الشىء الجديد استعملنا مكتبة فورميك                
 
 /*   https://jaredpalmer.com/formik/      */

 /* https://jasonwatmore.com/post/2020/04/20/react-formik-combined-add-edit-create-update-form-example */


 const AddEditfrom =({offreinfo,list }) =>{
 
 
    return(<div className="w3-center" >
<div className="w3-col  m11 w3-margin-left w3-white w3-padding">

<Formik
enableReinitialize
                initialValues={{
                    titre: offreinfo.titre || '',
                    entreprise: offreinfo.entreprise || '',
                    description: offreinfo.description || '',
                    location:offreinfo.location  || '',
                    imguri:offreinfo.imguri|| '',
                    type:offreinfo.type  || '',
                    cat:offreinfo._cat  || '',
                    date_d:offreinfo.date_d  || '',
                    date_f:offreinfo.date_f  || ''
                }}
                validationSchema={Yup.object().shape({
                titre: Yup.string()
                .required('titre is required'),
                entreprise: Yup.string()
                .required('entreprise is required'),
                description: Yup.string()
                .required('description is required'),
                location: Yup.string()
                .required('location is required'),
                imguri: Yup.string()
                .required(' imguri is required'),
                type: Yup.string()
                .required(' type is required'),
                date_d: Yup.string()
                .required(' date start is required'),
                date_f: Yup.string()
                .required(' date_end start is required'),
                })}
                onSubmit={fields => {
                    // updateUser({...fields,userId})
                             
                }}
                render={({ errors, status, touched }) => (
                    <Form>
                        <div >
                            <label htmlFor="titre">titre</label>
                            <Field name="titre" type="text" className={'w3-input w3-border' + (errors.titre && touched.titre? ' w3-border w3-border-red' : '')} />
                            {errors.titre && touched.titre ? (<div className="w3-text-red">{errors.titre}</div>) : null}
                            <br />
                        </div>
                        <div >
                            <label htmlFor="entreprise">entreprise</label>
                            <Field name="entreprise" type="text" className={'w3-input w3-border' + (errors.entreprise && touched.entreprise ? ' w3-border w3-border-red' : '')} />
                            {errors.entreprise && touched.entreprise? (<div className="w3-text-red">{errors.entreprise}</div>) : null}
                                 <br />                        </div>
                        <div >
                            <label htmlFor="description">description</label>
                            <Field name="description"  as="textarea" className={'w3-input w3-border' + (errors.description && touched.description ? ' w3-border w3-border-red' : '')} />
                            {errors.description && touched.description? (<div className="w3-text-red">{"mus number"}</div>) : null}
                         <br />                        </div>
                        <div >
                            <label htmlFor="description">Domain</label>
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
                            <label htmlFor="location">location</label>
                            <Field name="location" as="textarea"   className={'w3-input w3-border' + (errors.location && touched.location ? ' w3-border w3-border-red' : '')} />
                            {errors.location && touched.location ? (<div className="w3-text-red">{errors.location}</div>) : null}

<br />                        </div>


<div >
                            <label htmlFor="imguri">  imguri</label>
                            <Field   name="imguri"  as="textarea" className={'w3-input w3-border' + (errors.imguri && touched.imguri ? ' w3-border w3-border-red' : '')} />
                            {errors.imguri && touched.imguri ? (<div className="w3-text-red">{errors.imguri}</div>) : null}

<br />                        </div>

<div >
                            <label htmlFor="type"> Type</label>
                            <Field name="type" as="textarea" className={'w3-input w3-border' + (errors. type && touched. type ? ' w3-border w3-border-red' : '')} />
                            {errors.type && touched.type? (<div className="w3-text-red">{errors.type}</div>) : null}

<br />                        </div>


                           
<div >
                            <label htmlFor="date_d"> date start</label>
                            <Field name="date_d"  type='date'  className={'w3-input w3-border' + (errors. date_d && touched. date_d ? ' w3-border w3-border-red' : '')} />
                            {errors.date_d && touched.date_d? (<div className="w3-text-red">{errors.date_d}</div>) : null}

<br />                        </div>
                  
<div >
                            <label htmlFor="date_f"> date end</label>
                            <Field name="date_f" type='date' className={'w3-input w3-border' + (errors.date_f && touched. date_f? ' w3-border w3-border-red' : '')} />
                            {errors.date_f && touched.date_f? (<div className="w3-text-red">{errors.date_f}</div>) : null}

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


export default  AddEditfrom