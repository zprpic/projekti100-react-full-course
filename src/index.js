import React from "react";
import reactDom from "react-dom";

import { books } from "./books";
import Book from "./Book"; //default export - name can be changed from "Book" to anything (but have to update it where it is mentioned/called)

//CSS
import "./index.css";

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
};

reactDom.render(<BookList />, document.getElementById("root"));
