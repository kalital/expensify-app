import moment from 'moment';
import { 
    setTextFilter,
    sortByDate,
    sortByAmount,
    setStartDate,
    setEndDate 
 } from '../../actions/filters';


test('should generate ste start date action object ', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
      type: 'SET_START_DATE',
      startDate: moment(0)
    })
});
test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
});

test('should generate sort by date', () => {
    const type = 'SORT_BY_DATE'
    expect(sortByDate()).toEqual({ type })
});
test('should generate sort by amount', () => {
    const type = 'SORT_BY_AMOUNT';
    expect(sortByAmount()).toEqual({ type })
})

test('should setup set text filter oject with default', () => {
    const type = 'SET_TEXT_FILTER'
    expect(setTextFilter()).toEqual({
        type,
        text:''
    })
})

test('should setup set text filter object with value', () => {
    const text = 'some text for jest'
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    });
});