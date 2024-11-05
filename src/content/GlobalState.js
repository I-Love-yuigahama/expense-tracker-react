import React,{createContext, useReducer} from "react";
//createContext is used to create a global context, which allows different components to share 
// data without passing props down manually at every level.

// useReducer is a React hook that manages complex state logic. It’s 
// similar to useState, but is more suitable when you have multiple states or 
// want to handle actions in a centralized way.

import AppReducer from './AppReducer'
import { type } from "@testing-library/user-event/dist/type";

//initial state
const initialState = {
    transactions: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ]
}

//create context
export const GlobalContext = createContext(initialState);//createContext similia  to props

//Provider component
export const GlobalProvider = ({children}) =>
{
    const[state, dispatch] = useReducer(AppReducer,initialState);//UseRedycer is similiar as usestate 

    //action
    function deleteTransaction(id)
    {
            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id
            });
    }

    function addTransaction(transaction)
    {
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: transaction
            });
    }

    return(<GlobalContext.Provider value={{
        transactions:state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}