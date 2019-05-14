import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './EXpenseListFilter'

const ExpenseDashbordPage = () => (
     <div>
        <ExpenseListFilters />
        <ExpenseList />
     </div>
 );

 export default ExpenseDashbordPage;