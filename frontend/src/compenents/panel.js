import React from 'react'

//For design we used a lot on site
//خاص بتصميم استعملنا كثير في موقع
const Panel = ({ title, children }) => {
    return (<>
        <div className="w3-white w3-margin">
            <div className="w3-container w3-padding-16 w3-orange text-white">
                <h4> {title}</h4>
            </div>
            <ul className="w3-ul   w3-white">
                <li className="w3-padding-16">
                    <div className=" ">
                        <div className="w3-container   w3-center w3-text-white" >
                            {children}
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </>)
}




export default Panel