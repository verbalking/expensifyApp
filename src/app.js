 
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import configureStore from './store/configureStore';
import expenses from './reducers/expenses';
import {startSetExpenses} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses'
import 'react-dates/lib/css/_datepicker.css';
import getExpensesTotal from './selectors/expenses-total';
import './firebase/firebase';


const store = configureStore();


 const jsx=(
    <Provider store={store}>
        <AppRouter/>
    </Provider>    
);

const appRoot = document.getElementById('app');

ReactDOM.render(<p>Loading...</p>, appRoot);

store.dispatch(startSetExpenses()).then(()=>{
    ReactDOM.render(jsx, appRoot);

});
