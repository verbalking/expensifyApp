import moment from 'moment';


export default (expenses, {text, sortBy, startDate, endDate})=>{
    return expenses.filter((expense)=>{
        const createdAtMoment= moment(expense.createdAt);
        const startDateMatch= startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') :true;  
        const endDateMatch= endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') :true;

        const description=expense.description.toLowerCase();
        const textMatch= description.includes(text.toLowerCase()); 
        return startDateMatch && endDateMatch && textMatch;
        //filter only returns the objects that satisfy true in the return()
        
    }).sort((a, b)=>{
        if(sortBy==='date'){
            return a.createdAt>b.createdAt ? 1:-1;
        }else if(sortBy==='amount'){
            return a.amount>b.amount ? 1:-1;
        }
    });
};