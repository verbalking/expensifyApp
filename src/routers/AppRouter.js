import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import React from 'react';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpense from '../components/EditExpense';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import createHistory from 'history/createBrowserHistory'
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


export const history = createHistory();


const AppRouter=()=>(
    <Router history={history}> 
    <div>
        <Switch>
            <PublicRoute path="/" component={LoginPage} exact={true} />
            <PrivateRoute path="/create" component={AddExpensePage} />
            <PrivateRoute path="/edit/:id" component={EditExpense} />
            <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </div>
    </Router>
);

export default AppRouter;