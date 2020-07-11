import React from 'react'
import { Alerts } from '../alerts'
import toJson from 'enzyme-to-json';
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { render, fireEvent, cleanup } from '@testing-library/react'
Enzyme.configure({ adapter: new Adapter() })
const wrapperDanger = shallow(<Alerts.AlertDanger />)
const wrapperSuccess = shallow(<Alerts.Alertsuccess />)

it(' Alerts render  correctly ', () => {

    expect(toJson(wrapperDanger)).toMatchSnapshot();
    expect(toJson(wrapperSuccess)).toMatchSnapshot();

});
 


