import uuid from 'uuid';
import database from '../firebase/firebase'

// ADD_EXPENSE

export const addExpense = ( expense) => ({
    type: 'ADD_EXPENSE',
      expense
}); 

export const startAddExpense = (expenseData = {}) => {
   return (dispatch) => {
     const {
       description = '',
         note = '',   
         amount = 0,
         createdAt = 0
     } = expenseData;
     const expense = {description, note, amount, createdAt};
     return database.ref('expenses').push(expense).then((ref) => {
        dispatch(addExpense({
          id: ref.key,
          ...expense
        }));
     });
   };
}; 

// REMOVE_EXPENSE

export const removeExpense =  ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
    id,
    updates 
});

// SET_EXPENSES
export const setExpenses = (expenses) => ({
 type: 'SET_EXPENSES',
 expenses
});

// 1.fetch all expense data once
// 2.Parse that data into an array
// 3. Dispatch SET_EXPENSES

export const startSetExpenses = () => {
   return (dispatch) => {
     return database.ref('expenses').once('value').then((snap) => {
       const expenses = [];
       snap.forEach((childSnap) => {
         expenses.push({
           id: childSnap.key,
           ...childSnap.val()
         });
       });

       dispatch(setExpenses(expenses));
     });
   };
};


