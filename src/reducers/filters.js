import moment from 'moment';

const filtersReducerDState={
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};

 export default (state=filtersReducerDState, action)=>{
    switch(action.type){
        
        case 'SET_TEXT_FILTER':
            return{...state, text:action.text};

        case 'SORT_BY_DATE':
            return {...state, sortBy:"date"};

        case 'SORT_BY_AMOUNT':
            return {...state, sortBy:"amount"};
        
        case 'SET_START_DATE':
            return {...state, startDate: action.startDate};

        case 'SET_END_DATE':
            return {...state, endDate: action.endDate};

        default:
            return state;
    }
};


