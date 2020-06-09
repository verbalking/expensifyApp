import {addExpense, editExpense, removeExpense, startAddExpense, setExpenses, startSetExpenses} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import database from '../../firebase/firebase';
import expensesReducer from '../../reducers/expenses'


const createMockStore = configureMockStore([thunk]);

beforeEach((done)=>{
  const expenseData = {};
  expenses.forEach(({id, description, amount, note, createdAt})=>{
    expenseData[id] = {description, note, amount, createdAt};
  });
  database.ref('expenses').set(expenseData).then(()=>done());
});


test('Should setup remove expense action object', ()=>{
  const action = removeExpense('123abc');
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


test('Should setup set expenses action object with data', ()=>{
  const action = setExpenses(expenses);
  expect (action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  });
});



test('Should setup set expenses', ()=>{
  const action = {
    type: 'SET_EXPENSES',
    expenses: expenses[0]
  };
  const state = expensesReducer(expenses, action);
  expect (state).toEqual(expenses[0]);

  expect(action)

});

test('should fetch from firebase', (done)=>{
  const store= createMockStore({});
  store.dispatch(startSetExpenses()).then(()=>{
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    });
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