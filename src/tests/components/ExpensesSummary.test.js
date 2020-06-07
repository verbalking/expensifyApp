import React from 'react';
import {shallow} from 'enzyme';
import expenses from '../fixtures/expenses';
import {ExpensesSummary} from '../../components/ExpensesSummary'
import getExpensesTotal from '../../selectors/expenses-total';


test ('Should render ExpenseSummary correctly', ()=>{
  const total = getExpensesTotal(expenses);
  const wrapper = shallow (<ExpensesSummary expenses={expenses} total = {total} />);
  expect(wrapper).toMatchSnapshot();

});


// test ('Should render ExpenseSummary correctly', ()=>{
  
//   const wrapper = shallow (<ExpensesSummary expenses={expenses}/>);
//   expect(wrapper).toMatchSnapshot();

// })