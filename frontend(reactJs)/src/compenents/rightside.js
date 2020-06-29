import React from 'react'

import Panel from './panel'
//الجانب الأيمن من الصفحة
//Rightside of page
const Rightside = () => {
        return (<>
                <div className="w3-col  l3  w3-margin-top">
                        <Panel title="Filtres">
                                <button className="w3-button w3-orange w3-text-white w3-margin">Chercher</button>
                                <button className="w3-button w3-orange w3-text-white w3-margin">Chercher</button>
                                <button className="w3-button w3-orange w3-text-white w3-margin ">Chercher</button>
                        </Panel>

                        <hr />
                </div>
        </>
        )
}


export default Rightside
