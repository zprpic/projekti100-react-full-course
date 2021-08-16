import React from "react";
import reactDom from "react-dom";

const BookList = () => {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX482_BO1,204,203,200_.jpg"
    alt="Book image"
  ></img>
);

const Title = () => {
  return <h1>I Love You To The Moon And Back</h1>;
};

const Author = () => {
  return <h4>Amelia Hepworth</h4>;
};

reactDom.render(<BookList />, document.getElementById("root"));
