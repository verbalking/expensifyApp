import {createStore, combineReducers} from 'redux'
import React from 'react'
import uuid from 'uuid';


const setTextFilter=(text=' ')=>({
    type: 'SET_TEXT_FILTER',
    text
});

const sortByAmount=()=>({
    type: 'SORT_BY_AMOUNT'
});

const sortByDate=()=>({
    type: 'SORT_BY_DATE'
});

const setStartDate=(startDate)=>({
    type: 'SET_START_DATE',
    startDate
});

const setEndDate=(endDate)=>({
    type: 'SET_END_DATE',
    endDate
});

//Expenses Reducer

const expensesesReducerDState=[];

const addExpense=({description='', note='', amount=0, createdAt=0}={})=>({
    type:'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const editExpense = (id,updates)=>({
    type:'EDIT_EXPENSE',
    id,
    updates
});

const removeExpense=({id}={})=>({
    type: 'REMOVE_EXPENSE',
    id
});




const getVisibileExpenses = (expenses, {text, sortBy, startDate, endDate})=>{
    return expenses.filter((expense)=>{
        const startDateMatch= typeof startDate!=='number' || expense.createdAt>=startDate;
        const endDateMatch= typeof endDate!=='number' || expense.createdAt<=endDate;

        const description=expense.description.toLowerCase();
        const textMatch= description.includes(text.toLowerCase()); 
        return startDateMatch && endDateMatch && textMatch;
        //filter only returns the objects that satisfy true in the return()
    }).sort((a, b)=>{
        if(sortBy==='date'){
            return a.createdAt>b.createdAt ? 1:-1;
        }else if(sortBy==='amount'){
            return a.amount>b.amount ? 1:-1;
        }
    });
};

const expensesReducer = (state = expensesesReducerDState, action) =>{
    switch(action.type){
        case 'ADD_EXPENSE':
            return [...state, action.expense];  

        case 'REMOVE_EXPENSE':
            const array=state.filter(({id})=> action.id !== id   );
            return array;

        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if (expense.id===action.id){
                    return {
                        ...expense,
                        ...action.updates
                    };
                }else{
                    return expense;
                }
            })
            
        default:
            return state;
    }
};

const filtersReducerDState={
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state=filtersReducerDState, action)=>{
    switch(action.type){
        
        case 'SET_TEXT_FILTER':
            return{...state, text:action.text};

        case 'SORT_BY_DATE':
            return {...state, sortBy:"date"};

        case 'SORT_BY_AMOUNT':
            return {...state, sortBy:"amount"};
        
        case 'SET_START_DATE':
            return {...state, startDate: action.startDate};

        case 'SET_END_DATE':
            return {...state, endDate: action.endDate};

        default:
            return state;
    }
};


const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);


store.subscribe(()=>{
    const state=store.getState();
    const VisibileExpenses=getVisibileExpenses(state.expenses, state.filters);
    console.log(VisibileExpenses);
});

const Expense1=store.dispatch(addExpense({description:'Rent', amount:1, createdAt:1000}));
const Expense2=store.dispatch(addExpense({description:'9irew', amount:2, createdAt:0}));
const Expense3=store.dispatch(addExpense({description:'9irew', amount:3, createdAt:0}));


// const Expense3=store.dispatch(addExpense({description:'Bsafako', amount:101}));
// const Expense4=store.dispatch(addExpense({description:'9iriw', amount:19}));
// store.dispatch(editExpense(Expense3.expense.id,{description:"9alawat"}));
// store.dispatch(setTextFilter("salamo"));
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// store.dispatch(setStartDate(2000));
// store.dispatch(setEndDate(3000)); 

// store.dispatch(setTextFilter('RE'));

const demoState={
    expensese: [{
        id: 'abdel7a9 sanafouss',
        description: 'Zghayba 7afid',
        note: 'ci2iss hhhhhhhhhhhhhhhhhhhh',
        aount: 3333,
        createdAt: 0
    }],

    filters:[{
        text: 'tantarouss',
        sortBy: 'date', //date or amount
        startDate: undefined,
        endDate: undefined
    }]
};

