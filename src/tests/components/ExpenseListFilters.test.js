import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import  {filters, altFilters} from '../fixtures/filters'
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(()=>{
  setTextFilter=jest.fn();
  sortByAmount=jest.fn();
  sortByDate=jest.fn();
  setEndDate=jest.fn();
  setStartDate=jest.fn();
  wrapper = shallow(<ExpenseListFilters
    filters= {filters}
    setTextFilter={setTextFilter}
    setEndDate={setEndDate}
    setStartDate={setStartDate}
    sortByAmount={sortByAmount}
    sortByDate={sortByDate}
    />
  );
});

test ('should render Expense List Filters ', ()=>{
  expect(wrapper).toMatchSnapshot();
});

test ('should render Expense List Filters alt filters ', ()=>{
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});

test('should set text change', ()=>{
  const value='amounddt';
  wrapper.find('input').at(0).simulate('change',{
    target: {value}
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test ('should set sort bydate', ()=>{
  const value='date';

  wrapper.find('select').simulate('change', {
    target: {value}
  });
  expect(sortByDate).toHaveBeenCalled();
});


test ('should set sort by amount', ()=>{
  const value='amount';

  wrapper.find('select').simulate('change', {
    target: {value}
  });
  expect(sortByAmount).toHaveBeenCalled();
});


test ('should handle date change', ()=>{
  const startDate=moment(0);
  const endDate=moment(0).add(3, 'days');
  wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate});

  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test ('should handle date focus change', ()=>{
  const calendarFocused = 'endDate';
  wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);

  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});