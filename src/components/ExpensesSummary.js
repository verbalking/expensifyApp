import React from'react';
import getVisibleExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';

export const ExpensesSummary = ({expenses, total}) =>{
    const formattedTotal = numeral(total/100).format('$0,0.00');
    return(
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title"> Viewing <span>{expenses.length}</span> expenses totalling <span>{formattedTotal}</span></h1>
          <div className="page-header__actions">
            <Link className="button" to="/create">Add Expense</Link>
          </div>
        </div>
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