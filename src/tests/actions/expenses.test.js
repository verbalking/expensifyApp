import {addExpense, editExpense, removeExpense} from '../../actions/expenses';


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
  const expenseData={
    description: 'spopo',
    note: 'spospo',
    amount: 123,
    createdAt: 1000
  }

  const action=addExpense(expenseData);
  expect(action).toEqual({
    type:'ADD_EXPENSE',
    expense: {...expenseData, id: expect.any(String)}
 
  });


});

test ('Should setup add expense default', ()=>{
  const defaultExpense={
    description:'', 
    note:'', 
    amount:0, 
    createdAt:0
  };
  const action=addExpense();
  expect(action).toEqual({
    type:'ADD_EXPENSE',
    expense: {...defaultExpense, id: expect.any(String)}
  });

});