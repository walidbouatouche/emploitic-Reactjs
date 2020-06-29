import React from 'react'
import Footer from '../footer'
import Enzyme, { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
Enzyme.configure({ Adapter: new Adapter() })


beforeEach()
it(' Footer  commpent render correctly', () => {
    const wrapper = shallow(<Footer />)
    expect(toJson(wrapper)).toMatchSnapshot();
});
