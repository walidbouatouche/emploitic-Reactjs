import React, { useRef } from 'react'
import { faDownload, faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const FileUpload = ({ updateCvFile, _cv_link, userId }) => {


//  we  useref  for open input but by click on other button 
  const inputFile = useRef(null); 
  const onButtonClick = () => { inputFile.current.click(); };
  const onChange = (e) => {
    const formData = new FormData(); // userid + file
  
    formData.append('pdf', e.target.files[0]) // get file from input
    formData.append('userId', userId)  // get use id 
   
    updateCvFile(formData);
  }
  const openCv = () => {
    window.open(_cv_link);
  }

  return (
    <>
      <li className="w3-padding-16">
        <input onChange={onChange} ref={inputFile} style={{ display: "none" }} type='file' id='file' name='file' />
        <button onClick={onButtonClick} className="w3-text-orange w3-button w3-hover-text-orange  w3-hover-white">  Edit your pdf cv :<FontAwesomeIcon icon={faEdit} /> </button>
        <button onClick={openCv} className="w3-text-orange w3-button w3-hover-text-orange  w3-hover-white">  {_cv_link.substr(-20)} <FontAwesomeIcon icon={faDownload} />  </button>
      </li>
    </>
  )

}




export default FileUpload
