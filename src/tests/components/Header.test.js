import {shallow} from 'enzyme'
import React from 'react';
import Header from '../../components/Header';

test ('shuld render Header', ()=>{
  const wrapper = shallow(<Header/>);
  expect(wrapper).toMatchSnapshot();
  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header/>);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
  // expect(wrapper.find('h1').text()).toBe('Expensify');
});

