 
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import AppRouter, {history} from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import configureStore from './store/configureStore';
import expenses from './reducers/expenses';
import {startSetExpenses} from './actions/expenses';
import {login, logout} from './actions/auth';
import getVisibleExpenses from './selectors/expenses'
import 'react-dates/lib/css/_datepicker.css';
import getExpensesTotal from './selectors/expenses-total';
import { firebase } from './firebase/firebase';


const store = configureStore();


 const jsx=(
    <Provider store={store}>
        <AppRouter/>
    </Provider>    
);

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered){
        ReactDOM.render(jsx, appRoot);
        hasRendered = true;
    }
};

const appRoot = document.getElementById('app');

ReactDOM.render(<p>Loading...</p>, appRoot);


firebase.auth().onAuthStateChanged((user)=>{
    if (user){
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(()=>{
            renderApp();
        });
        if (history.location.pathname==='/'){
            history.push('/dashboard');
        }
    }else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});

