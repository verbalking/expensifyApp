import expenses from "../tests/fixtures/expenses";

const expensesReducerDState=[];


export default (state = expensesReducerDState, action) =>{
    switch(action.type){
        case 'ADD_EXPENSE':
            return [...state, action.expense];  

        case 'REMOVE_EXPENSE':
            const array=state.filter(({id})=> action.id !== id   );
            return array;

        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if (expense.id===action.id){
                    return {
                        ...expense,
                        ...action.updates
                    };
                }else{
                    return expense;
                }
            })
        
        case 'SET_EXPENSES':
            return action.expenses;
        default:
            return state;
    }
};