import React from 'react';
import ExpenseListItem from './ExpenseListItem';
import {connect} from 'react-redux';
import {DateRangePicker} from 'react-dates'
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from '../actions/filters';

export class ExpenseListFilters extends React.Component{

    state={
        calendarFocused:  null
    };

    onDatesChange=({startDate, endDate})=>{
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }

    onFocusChange=(calendarFocused)=>{
        this.setState(()=>({calendarFocused}));
    }

    onTextChange=(e)=>{
        this.props.setTextFilter(e.target.value);
    };

    onSortChange=(e)=>{   
        if(e.target.value==='amount'){
            this.props.sortByAmount();
        }else 
        if(e.target.value==='date'){
            this.props.sortByDate();
        }
    };
    render(){
        return(
            <div className="content-container">
            <div className="input-group">
                <div className="input-group__item">
                    <input 
                    type='text' 
                    placeholder="Search Expense :)"
                    className="text-input"
                    value={this.props.filters.text} 
                    onChange={this.onTextChange} 
                    />
                </div>
                    
                <div className="input-group__item">
                    <select 
                        className="select"

                        value={this.props.filters.sortBy}
                        onChange={this.onSortChange}
                        >
                        <option value="date">Date</option>
                        <option value="amount">Amount</option>
                    </select>
                </div>
                
                <div className="input-group__item">
                    <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={()=>false}
                    showClearDates={true}
                    />
                </div>

            </div>
           
            
            
            
        </div>
        );
    }
    
};



const mapStateToProps = (state)=>{
    return {
        filters: state.filters
    };

};

const mapDispatchToProps = (dispatch)=>({
    setTextFilter: (text)=>{dispatch(setTextFilter(text))},
    sortByAmount:()=>{dispatch(sortByAmount())},
    sortByDate:()=>{dispatch(sortByAmount())},
    setStartDate:(startDate)=>{dispatch(setStartDate(startDate))},
    setEndDate:(endDate)=>{dispatch(setEndDate(endDate))}
});
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);