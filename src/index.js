import React from "react";
import reactDom from "react-dom";

const Greeting = () => {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
};

const Person = () => <h2>prle</h2>;

const Message = () => {
  return <p>para para paragraph</p>;
};

reactDom.render(<Greeting />, document.getElementById("root"));
