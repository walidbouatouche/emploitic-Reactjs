import React from 'react'
import Indexcompenentoffre from '../index'
import Enzyme, { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
Enzyme.configure({ Adapter: new Adapter() })


beforeEach()
it(' OFFRE commpent render correctly', () => {
    const wrapper = shallow(<Indexcompenentoffre />)
    expect(toJson(wrapper)).toMatchSnapshot();
});