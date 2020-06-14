import React from 'react'
import Navigation from '../navigation'
import Enzyme, { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
Enzyme.configure({ Adapter: new Adapter() })


beforeEach()
it(' navigation commpent render correctly', () => {
  const wrapper = shallow(<Navigation />)
  expect(toJson(wrapper)).toMatchSnapshot();
});
