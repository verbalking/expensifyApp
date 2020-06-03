import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import React from 'react';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import AddExpensePage from '../components/AddExpensePage'
import EditExpense from '../components/EditExpense'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/Header'








const AppRouter=()=>(
    <BrowserRouter>
    <div>
        <Header/>
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route path="/edit/:id" component={EditExpense} />
            <Route component={NotFoundPage} />
        </Switch>
    </div>
    </BrowserRouter>
);

export default AppRouter;