import {shallow} from 'enzyme'
import React from 'react';
import {LoginPage} from '../../components/LoginPage'


test ('Should render LoginPage', ()=>{
  const wrapper = shallow(<LoginPage/>)
  expect(wrapper).toMatchSnapshot();
});