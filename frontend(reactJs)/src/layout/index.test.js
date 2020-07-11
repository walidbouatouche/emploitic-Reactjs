import React from 'react'
import Layout from './index'
import Footer from '../compenents/footer'
import Menu from '../compenents/menu'
import { Helmet } from "react-helmet"
import toJson from 'enzyme-to-json';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })
const wrapper = shallow(<Layout />)
const title = 'Emploitik'

it('Layout render  correctly ', () => {

  expect(toJson(wrapper)).toMatchSnapshot();


});

it(' have only one footer ', () => {

  expect(wrapper.find(Footer).length).toEqual(1)


});

it('have only one Menu ', () => {
  expect(wrapper.find(Menu).length).toEqual(1)
})
it('have only one Helma with one title  ', () => {
  const wrapperHelmet = wrapper.find(Helmet);
  expect(wrapperHelmet.length).toEqual(1)
  expect(wrapperHelmet.find('title').length).toEqual(1)
 


})
