import React, { useRef } from 'react';
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// convert image to string
const ShowImage = ({ showImagEvent }) => {
  const inputFileImage = useRef(null)
  function imageChange(e) {
    const file = e.target.files[0];
    if (file.type.split('/')[0] === 'image') {

      let reader = new FileReader();
      reader.onload = () => {

        showImagEvent(reader.result)
      };
      reader.readAsDataURL(file);
    }


  }

  return (<div>
    <input ref={inputFileImage} style={{ display: 'none' }} type="file" onChange={imageChange}></input>
    <FontAwesomeIcon  style={{color:'red'}}onClick={() => inputFileImage.current.click()} icon={faUpload}></FontAwesomeIcon>

  </div>)

}

export default ShowImage;