import React from 'react'
import Spinner from '../spinner'
import Enzyme, { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
Enzyme.configure({ Adapter: new Adapter() })


beforeEach()
it(' spinner render correctly', () => {
    const wrapper = shallow(<Spinner />)
    expect(toJson(wrapper)).toMatchSnapshot();
});
