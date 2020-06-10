import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {startRemoveExpense, startEditExpense} from '../actions/expenses'


export class EditExpense extends React.Component{

    onSubmit=(expense)=>{
    
        this.props.startEditExpense(this.props.expense.id ,expense);
        this.props.history.push('/');
    };

    render(){
        return(
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm 
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                    />
        
                    <button className = "button button--secondary" onClick={()=>{
                        this.props.startRemoveExpense({id: this.props.expense.id});
                        this.props.history.push('/');
                    }}>Remove Expense</button>
                </div>
    
            </div>
        )
    };
}

const mapStateToProps = (state, props) =>{
    return  {
        expense: state.expenses.find( (expense) => expense.id === props.match.params.id)
    };
};

const mapDispatchToProps=(dispatch)=>({
    startRemoveExpense: (id) => dispatch(startRemoveExpense(id)),
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);