import React from "react";
import reactDom from "react-dom";

//CSS
import "./index.css";

const firstBook = {
  author: "Amelia Hepworth",
  title: "I Love You To The Moon And Back",
  img: "https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
};

const secondBook = {
  author: "Dr. Seuss",
  title: "Oh, the Places You'll Go!",
  img: "https://images-na.ssl-images-amazon.com/images/I/51VU-ask3QS._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
};

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
};

const Book = ({ img, title, author }) => {
  //const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="Book"></img>
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

reactDom.render(<BookList />, document.getElementById("root"));
