import expenses from '../fixtures/expenses';
import getExpensesTotal from '../../selectors/expenses-total';



test('Should return 0 for no expenses', ()=> {
  const array = [];
  const action = getExpensesTotal(array);
  expect(action).toEqual(0);
});

test ('Should return a single expense', ()=>{
  const array = [expenses[0], expenses[1]];
  const action = getExpensesTotal(array);
  expect(action).toEqual(30);
});