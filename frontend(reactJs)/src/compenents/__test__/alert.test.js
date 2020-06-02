import React from 'react'
import Alerts from '../alerts'
import Enzyme, { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
Enzyme.configure({ Adapter: new Adapter() })


beforeEach()
it(' Alerts commpent render correctly', () => {
    const wrapper = shallow(<Alerts />)
    expect(toJson(wrapper)).toMatchSnapshot();
});
