import React from 'react';
// convert image to string
const showImage = ({ showImagEvent }) => {

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
    <input type="file" onChange={imageChange}></input>

  </div>)

}

export default showImage;