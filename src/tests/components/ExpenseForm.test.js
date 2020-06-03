import React from 'react';
import {shallow} from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('Should render Expense form correclty', ()=>{
  const wrapper=shallow(<ExpenseForm />);
  expect (wrapper).toMatchSnapshot();
});

test('Should render Expense form  with data', ()=>{
  const wrapper=shallow(<ExpenseForm expense={expenses[0]} />);
  expect (wrapper).toMatchSnapshot();
});


test('should render error for invalid form ', ()=>{
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('form').simulate('submit', {
    preventDefault: ()=>{}
  });
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('Should set desc on input change', ()=>{
  const value = 'New Desc';
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(0).simulate('change', {
    target: {value}
  });
  expect(wrapper.state('description')).toBe(value);
});

test('Should set note on textarea', ()=>{
  const value='Spipox';
  const wrapper = shallow(<ExpenseForm/>);
  wrapper.find('textarea').simulate('change', {
    target: {value}
  })
  expect(wrapper.state('note')).toBe(value);
});

test('Should set correct amount ', ()=>{
  const value='10';
  const wrapper = shallow(<ExpenseForm/>);
  wrapper.find('input').at(1).simulate('change', {
    target: {value}
  })
  expect(wrapper.state('amount')).toBe(value);
});

test('Should not set invalid amount value ', ()=>{
  const value='10.333';
  const wrapper = shallow(<ExpenseForm/>);
  wrapper.find('input').at(1).simulate('change', {
    target: {value}
  });
  expect(wrapper.state('amount')).toBe('');
});

test ('Should call onSubmit for valid sub', ()=>{
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<ExpenseForm expense = {expenses[0]} onSubmit={onSubmitSpy}/>);
  wrapper.find('form').simulate('submit', {
    preventDefault: ()=> {}
  });
  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount*100,
    note: expenses[0].note,
    createdAt: expenses[0].createdAt
  });
});

test('should set new date on date change', ()=>{
  const now = moment();
  const wrapper = shallow (<ExpenseForm/>);
  wrapper.find('SingleDatePicker').prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calendar on change', ()=>{
  const focused = true;
  const wrapper = shallow (<ExpenseForm/>);
  wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
  expect(wrapper.state('calendarFocused')).toEqual(focused);
});