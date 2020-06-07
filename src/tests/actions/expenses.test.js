import {addExpense, editExpense, removeExpense, startAddExpense} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

const createMockStore = configureMockStore([thunk]);

test('Should setup remove expense action object', ()=>{
  const action = removeExpense({id: '123abc'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });

});

test ('Should setupd Edit expense', ()=>{

  const action = editExpense('123123', {note:'zghayba'});
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123123',
    updates: {note: 'zghayba'},
  });
});


test ('Should setup add expense values', ()=>{


  const action=addExpense(expenses[2]);
  expect(action).toEqual({
    type:'ADD_EXPENSE',
    expense: expenses[2]
 
  });


});

test ('should add expense to store and database', (done)=>{
  const store = createMockStore({});
  const expenseData = {
    description: 'MouQQQse',
    amount: 3000,
    note: 'this is a note',
    createdAt: 1000
  }
  store.dispatch(startAddExpense(expenseData)).then(()=>{
    done();
  }); 

});

// test ('Should setup add expense default', ()=>{
//   const defaultExpense={
//     description:'', 
//     note:'', 
//     amount:0, 
//     createdAt:0
//   };
//   const action=addExpense();
//   expect(action).toEqual({
//     type:'ADD_EXPENSE',
//     expense: {...defaultExpense, id: expect.any(String)}
//   });
// });