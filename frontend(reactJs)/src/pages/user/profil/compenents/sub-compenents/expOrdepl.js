import React from 'react'
import Model from '../../../../../compenents/model'
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { onlyNmbrAlph } from '../../../../../_helpers/speedFunction'
const Exp = ({ oneFiel = [], getOneField, title }) => {

    return (<div  >
        <h6>{title}</h6>
        <Model id={title} title={<FontAwesomeIcon icon={faPlus} />}>
            <Formik
                enableReinitialize
                initialValues={{
                    title: oneFiel.title || '',
                    content: oneFiel.content || '',
                    start: oneFiel.start || '',
                    end: oneFiel.end || '',
                    location: oneFiel.location || ''

                }}
                validationSchema={Yup.object().shape({
                    title: Yup.string()
                        .required('title is required').max(40, "must under 40"),
                    content: Yup.string()
                        .required('content is required'),
                    location: Yup.string()
                        .required(' location is required'),
                    end: Yup.string().required("required"),
                    start: Yup.string().required("required")
                })}
                onSubmit={fields => {
                    //  clear text from not good words
                    fields.title = onlyNmbrAlph(fields.title)
                    fields.content = onlyNmbrAlph(fields.content)
                    fields.location = onlyNmbrAlph(fields.location)

                    getOneField(fields)

                }}
                render={({ errors, status, touched }) => (
                    <Form>
                        <div >
                            <label htmlFor="title">title</label>
                            <Field name="title" type="text" className={'w3-input w3-border' + (errors.title && touched.title ? ' w3-border w3-border-red' : '')} />
                            {errors.title && touched.title ? (<div className="w3-text-red">{errors.title}</div>) : null}
                            <br />
                        </div>
                        <div >
                            <br />
                            <label htmlFor="content"> Description:</label>

                            <Field name="content" as="textarea" className={'w3-input w3-border' + (errors.location && touched.location ? ' w3-border w3-border-red' : '')} />

                            {errors.content && touched.content ? (<div className="w3-text-red">{errors.content}</div>) : null}
                            <br />                        </div>

                        <div >
                            <label htmlFor="location">  location /entreprise</label>
                            <Field name="location" as="textarea" className={'w3-input w3-border' + (errors.location && touched.location ? ' w3-border w3-border-red' : '')} />
                            {errors.location && touched.location ? (<div className="w3-text-red">{errors.location}</div>) : null}

                            <br />                        </div>
                        <div >
                            <label htmlFor="start"> date start</label>
                            <Field name="start" type='date' className={'w3-input w3-border' + (errors.start && touched.start ? ' w3-border w3-border-red' : '')} />
                            {errors.start && touched.start ? (<div className="w3-text-red">{errors.start}</div>) : null}
                            <br />
                        </div>

                        <div >
                            <label htmlFor="end"> date end</label>
                            <Field name="end" type='date' className={'w3-input w3-border' + (errors.end && touched.end ? ' w3-border w3-border-red' : '')} />
                            {errors.end && touched.end ? (<div className="w3-text-red">{errors.end}</div>) : null}

                            <br />
                            <div >
                                <button type="submit" className="w3-button w3-orange w3-text-white" >Add</button>
                            </div>
                        </div>
                    </Form>)}
            />
        </Model>

    </div>)

}

export default Exp