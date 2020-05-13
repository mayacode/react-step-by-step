import React from 'react';
import {useBooksFetch} from "./hooks";

export function Books() {
    const { data } = useBooksFetch();
    return (
        <div>
            <h1>Books</h1>
            {data?.items?.map((book) => (
                <div>
                    <div style={{ width: '100px', display: 'inline-block' }}>
                        {book.id}
                    </div>
                    <span>{book.title}</span>
                </div>
            ))}
        </div>
    );
}

Books.displayName = 'Books';
Books.propTypes = {};

export default Books;
