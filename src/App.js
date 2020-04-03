import React, { useReducer } from 'react';

import StoreContext from "./StoreContext";
import Books from "./Books";
import booksReducer, { initialState } from './books.reducers';
import { addBook } from "./books.action";

function App() {

    let [state, dispatch] = useReducer(booksReducer, initialState);

    const onAddBook = () => {
        dispatch(addBook({ title: "Man and See", auther: "Ernest Hemingway" }));
    }

    return (
        <StoreContext.Provider value={{ state, dispatch }}>
            <Books />
            <button onClick={onAddBook}>Add Book</button>
        </StoreContext.Provider>
    );
}

export default App;
