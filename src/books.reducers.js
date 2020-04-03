import { BOOKS_ADD_BOOK, BOOKS_DELETE_BOOK } from "./books.action";

export const initialState = {
    isbn: 0,
    books: []
};

const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case BOOKS_ADD_BOOK: {
            const book = { isbn: state.isbn, ...action.payload };
            return {
                ...state,
                isbn: state.isbn + 1,
                books: [...state.books, book]
            }
        }
        case BOOKS_DELETE_BOOK: {
            const books = state.books.filter(book => book.isbn !== action.payload)
            return {
                ...state,
                books
            }
        }
        default:
            return state;
    }
};

export default booksReducer;