import React from'react';
import getVisibleExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';

import {connect} from 'react-redux';

const ExpensesSummary = ({expenses, total}) =>{

    return(
      <div>
        <h3> Viewing {expenses.length} expenses totalling {total}</h3>
      </div>
    );

} 

const mapStateToProps = (state, props) =>{
  const expensesSelected = getVisibleExpenses(state.expenses, state.filters);
  return  {
      expenses: expensesSelected ,
      total: getExpensesTotal(expensesSelected)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);