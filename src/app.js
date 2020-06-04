 
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import configureStore from './store/configureStore';
import expenses from './reducers/expenses';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses'
import 'react-dates/lib/css/_datepicker.css';


const store = configureStore();

console.log('spopos');
// store.dispatch(addExpense({description: 'Water Bill', note:'Sou7lifoux', amount: 3, createdAt:1995}));
// store.dispatch(addExpense({description: 'Gas Bill', note:'Sou7lifoux', amount: 2, createdAt:1990}));
// store.dispatch(addExpense({description: 'Mol lben', note:'Sou7lifoux', amount: 1, createdAt:2004}));


// const state=store.getState();
// const visibleExpenses=getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);

 const jsx=(
    <Provider store={store}>
        <AppRouter/>
    </Provider>    
);

const appRoot = document.getElementById('app');
ReactDOM.render(jsx, appRoot);

