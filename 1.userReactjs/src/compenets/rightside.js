import React from 'react'
import Panel from './panel'
//الجانب الأيمن من الصفحة
//Rightside of page
const Rightside = () => {
        return (<>
                <div className="w3-col  l3  w3-margin-top">
                        <Panel title="Recherche avancée">
                                <input className="w3-input w3-border" placeholder="Mots clés, compétences, métier" type="text" />
                                <br />
                                <button className="w3-button w3-orange w3-text-white">Chercher</button>
                        </Panel>
                        <Panel title="Invitez vos amis">
                                <input className="w3-input w3-border" placeholder="add Email here" type="text" />
                                <br />
                        </Panel>
                        <hr />
                </div>
        </>
        )
}


export default Rightside
