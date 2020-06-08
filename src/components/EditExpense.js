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
            <ExpenseForm 
                expense={this.props.expense}
                onSubmit={this.onSubmit}
            />
    
            <button onClick={()=>{
                this.props.startRemoveExpense({id: this.props.expense.id});
                this.props.history.push('/');
            }}>Remove </button>
    
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