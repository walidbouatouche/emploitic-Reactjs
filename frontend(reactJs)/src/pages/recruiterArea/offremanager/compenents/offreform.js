import React  ,{useState}from'react'
import { Formik, Field, Form  } from 'formik';
import * as Yup from 'yup';
import  ShowImage from'../../../../_helpers/imageTo64'
const types = [
    { "id": "1", "label": "CDI(Débutant /Junior)" },
    { "id": "2", "label": "CDD(Débutant / Junior)" },
    { "id": "3", "label": "CDI(Confirmé / Expérimenté)" },
    { "id": "4", "label": "CDD(Confirmé / Expérimenté)" } ,
    { "id": "4", "label": "Autres" }
]

 const AddEditfrom =({ offreinfo ,list ,addEditOffre ,location }) =>{

    // set default value 
  let  [imguri=offreinfo.imguri,setImgUri]=useState()
    let dt= new Date() ;
    

    function showImagEvent(uri){

        // convert selected image to base and assigment to uri 
     setImgUri(uri)

    }
 
    return(<div className="w3-center" >
 <div className="w3-col  m11 w3-margin-left w3-white w3-padding">
                  <Formik
                enableReinitialize
                initialValues={{
                    _id:offreinfo._id || '' ,
                    titre: offreinfo.titre || '',
                    entreprise: offreinfo.entreprise || '',
                    description: offreinfo.description || '',
                    location:offreinfo.location  || 'Adrar',
                    type:offreinfo.type  || "CDI(Débutant /Junior)",
                    cat:offreinfo.cat  || '6',
                    date_d: offreinfo.date_d  ||   `${dt.getFullYear()}-${dt.getMonth()< 9 ? '0'+(dt.getMonth()+1):dt.getMonth()+1}-${dt.getDate()}`
                    ,
                    date_f:offreinfo.date_f  
                    // || `${dt.getFullYear()}-${dt.getMonth()< 9 ? '0'+(dt.getMonth()+1):dt.getMonth()+1}-${dt.getDate()}`
                    ,
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
                type: Yup.string()
                .required(' type is required').max(30),
                 
                date_f: Yup.string()
                .required(' date_end start is required'),
                })}
                onSubmit={fields => {
             // return fields of user with  imageuri property by  spreed ES6 method
             let firstDate=new Date(fields.date_d )
             let secondDate=new Date(fields.date_f )
             if( firstDate > secondDate){

                alert("  End Date not valid")
                return false ;

   }
                   if(window.confirm("Are you sure")){
                    addEditOffre({...fields,imguri }); 
                   }
                        
                  
                  
                            
                }}
                render={({ errors, status, touched }) => (
                    <Form>
                        <div >
                        <label htmlFor="image">Image</label>
                         <br/>
                     
                        <img src={imguri} style={{height:'150px', width:'120px'}}  />
                        <ShowImage   showImagEvent={showImagEvent}  />
                        <br/>
                     
                  
                            <label htmlFor="titre">Title</label>
                            <Field name="titre" type="text" className={'w3-input w3-border' + (errors.titre && touched.titre? ' w3-border w3-border-red' : '')} />
                            {errors.titre && touched.titre ? (<div className="w3-text-red">{errors.titre}</div>) : null}
                            <br />
                        </div>
                        <div >
                        <label htmlFor="entreprise">Nom de entreprise</label>

                            <Field name="entreprise" type="text" className={'w3-input w3-border' + (errors.entreprise && touched.entreprise ? ' w3-border w3-border-red' : '')} />
                            {errors.entreprise && touched.entreprise? (<div className="w3-text-red">{errors.entreprise}</div>) : null}
                                 <br />                        </div>
                        <div >
                            <label htmlFor="description">Description</label>
                            <Field name="description"  rows="15" as="textarea" className={'w3-input w3-border' + (errors.description && touched.description ? ' w3-border w3-border-red' : '')} />
                            {errors.description && touched.description? (<div className="w3-text-red">{errors.description}</div>) : null}
                         <br />                        </div>
                        <div >
                            <label htmlFor="description">Domain</label>
                            <br  />
                        <Field as="select"  name="cat" >

                        
                {
                 list.map((item)=>    
                  
                    <option  key={item.id} value={item.id}>{item.title}</option>)

                }

            
            }
                    
                </Field>
                                </div>

                                <div >
                                <br />  
                            <label htmlFor="location">Location</label>
 
                            <Field name="location" as="select"   className={'w3-input w3-border' + (errors.location && touched.location ? ' w3-border w3-border-red' : '')} >
                            
                            {
                location.map((item)=>    
                  
                    <option    key={item.id}value={item.label}>{item.label}</option>)

                }                </Field>

                            {errors.location && touched.location ? (<div className="w3-text-red">{errors.location}</div>) : null}

                                  <br />                      
                                </div>


                                <div >
                               <br />                  
                             </div>
                              <div >
                            <label htmlFor="type"> Type</label>
                            <Field name="type" as="select" className={'w3-input w3-border' + (errors. type && touched. type ? ' w3-border w3-border-red' : '')} >
                            {errors.type && touched.type? (<div className="w3-text-red">{errors.type}</div>) : null}
                         { types.map((item)=>    
                  
                  <option    key={item.id}value={item.label}>{item.label}</option>)

              } 
                               </Field>
                             <br />                      
                            </div>
                           
                          
                  
                                    <div >
                            <label htmlFor="date_f"> date end</label>
                            <Field name="date_f" type='date' className={'w3-input w3-border' + (errors.date_f && touched. date_f? ' w3-border w3-border-red' : '')} />
                            {errors.date_f && touched.date_f? (<div className="w3-text-red">{errors.date_f}</div>) : null}

                              <br />                    
                           </div>

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