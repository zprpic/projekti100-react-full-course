import React from "react";
import reactDom from "react-dom";

//CSS
import "./index.css";

const books = [
  {
    id: 1,
    author: "Amelia Hepworth",
    title: "I Love You to the Moon and Back",
    img: "https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
  },
  {
    id: 2,
    author: "Dr. Seuss",
    title: "Oh, the Places You'll Go!",
    img: "https://images-na.ssl-images-amazon.com/images/I/51VU-ask3QS._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
  },
  {
    id: 3,
    author: " Bill Martin Jr. / Eric Carle",
    title: "Brown Bear, Brown Bear, What Do You See?",
    img: "https://images-na.ssl-images-amazon.com/images/I/51430n+9jlL._SY344_BO1,204,203,200_.jpg",
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
};

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="Book"></img>
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

reactDom.render(<BookList />, document.getElementById("root"));
