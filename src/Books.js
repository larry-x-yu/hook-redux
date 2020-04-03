import React from "react";
import connect from "./connect";
import { deleteBook } from "./books.action";

const styles = {
    bookentry: {
        display: "flex",
    }
}

const Books = ({ books, deleteBook }) => {
    return books && books.length > 0 && (
        <>
            {books.map((book, index) => (
                <dl style={styles.bookentry} key={index}>
                    <dt>{book.title}</dt><dd>{book.auther}</dd>
                    <button onClick={() => deleteBook(book.isbn)}>Delete</button>
                </dl>
            ))}
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        books: state.books
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteBook: payload => dispatch(deleteBook(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Books);