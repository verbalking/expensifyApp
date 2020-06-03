
import {connect} from 'react-redux';
import React from 'react';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses'

export const ExpenseList = (props) =>(
    <div>
        {props.expenses.length === 0 ? (
            <p>No Expenses :(</p>
        ) : (
            
            props.expenses.map((expense)=>{
            return <ExpenseListItem key={expense.id} {...expense}/>;
        })
        )}

    </div>
);

//rebranding this component so as to connect it with the store
const mapStateToProps = (state)=>{
    return{
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);

