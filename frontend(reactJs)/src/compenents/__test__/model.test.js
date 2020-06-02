import React from 'react'
import Model from '../model'
import Enzyme, { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
Enzyme.configure({ Adapter: new Adapter() })


beforeEach()
it(' Model  commpent render correctly', () => {
  const wrapper = shallow(<Model />)
  expect(toJson(wrapper)).toMatchSnapshot();
});
