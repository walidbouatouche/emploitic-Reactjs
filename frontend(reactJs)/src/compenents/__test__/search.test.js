import React from 'react'
import Search from '../search'
import Enzyme, { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
Enzyme.configure({ Adapter: new Adapter() })


beforeEach()
it(' srearch commpent render correctly', () => {
    const wrapper = shallow(<Search />)
    expect(toJson(wrapper)).toMatchSnapshot();
});
