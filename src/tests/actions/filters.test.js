
import {setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount} from '../../actions/filters';
import moment from 'moment';

test ('shuold generate set start date ', ()=>{
  const action=setStartDate(moment(0));

  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });

});

test ('should generate set end date ', ()=>{
  const action=setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

test ('Should generate set text filter', ()=>{
  const action=setTextFilter("spopo");
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'spopo'
  });
});


test ('Should generate set text filter', ()=>{
  const action=setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test ('Should generate set sortByDate', ()=>{
  expect(sortByDate()).toEqual({type: 'SORT_BY_DATE'});
});

test ('Should generate set sortByAmount', ()=>{
expect(sortByAmount()).toEqual({type: 'SORT_BY_AMOUNT',});
});