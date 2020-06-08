import uuid from 'uuid';
import database from '../firebase/firebase';

export const addExpense=(expense)=>({
    type:'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData={}) => {
    return (dispatch) => {
        const {
            description= '',
            note='',
            amount=0,
            createdAt=0
        }=expenseData;
        const expense = {description, note, amount, createdAt};

        return database.ref('expenses').push(expense).then((ref)=>{
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    };
};

export const editExpense = (id,updates)=>({
    type:'EDIT_EXPENSE',
    id,
    updates
});

export const removeExpense=(id={})=>({
    type: 'REMOVE_EXPENSE',
    id
});



export const setExpenses = (expenses)=>({
    type: 'SET_EXPENSES',
    expenses
});


export const startRemoveExpense = ({id})=>{
    return (dispatch)=>{
        const path = 'expenses/';
        const removedExpense=path.concat(id);
        database.ref(removedExpense).remove();
        dispatch(removeExpense(id));
    };
};


export const startSetExpenses= ()=>{
    return(dispatch)=>{
        return database.ref('expenses').once('value').then((snapshot)=>{
            const expenses=[];
            snapshot.forEach((childSnapshot)=>{
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(setExpenses(expenses));

        });
    };
}; 

export const startEditExpense = (id,updates) => {
    return (dispatch)=>{
        const path = 'expenses/';
        const editedExpense = path.concat(id);
        return database.ref(editedExpense).update({
            ...updates
        }).then(()=>{
            dispatch(editExpense(id,updates));
        });
    };
};

