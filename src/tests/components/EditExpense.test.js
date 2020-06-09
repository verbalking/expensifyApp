import React from 'react';
import {shallow} from 'enzyme';
import {EditExpense} from '../../components/EditExpense';
import expenses from '../fixtures/expenses';

let removeExpense, editExpense, history, wrapper;

beforeEach(()=>{
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = {push: jest.fn()};
  wrapper = shallow (
      <EditExpense 
      editExpense={editExpense}
      removeExpense = {removeExpense}
      history={history}
      expense={expenses[1]}
    />
  );
});

test ('should render edit expense', ()=>{
  expect(wrapper).toMatchSnapshot();
});

// test ('Should handle Edit Expense', ()=>{
//   wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
//   expect(history.push).toHaveBeenLastCalledWith('/');
//   expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id,expenses[1]);
// });

// test ('Should handle removeExpense', ()=>{
//   wrapper.find('button').at(0).simulate('click');
//   expect(history.push).toHaveBeenLastCalledWith('/');
//   expect(removeExpense).toHaveBeenLastCalledWith(expenses[1].id);
// });