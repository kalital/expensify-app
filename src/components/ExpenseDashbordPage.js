import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './EXpenseListFilter';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashbordPage = () => (
     <div>
        <ExpensesSummary />
        <ExpenseListFilters />
        <ExpenseList />
     </div>
 );

 export default ExpenseDashbordPage;