export const BOOKS_ADD_BOOK = "BOOKS_ADD_BOOK";
export const BOOKS_DELETE_BOOK = "BOOKS_DELETE_BOOK";


const createAction = (type) => {
    return (...args) => args && args.length > 0 ? {type, payload: args[0]} : {type};
}

export const addBook = createAction(BOOKS_ADD_BOOK);
export const deleteBook = createAction(BOOKS_DELETE_BOOK);