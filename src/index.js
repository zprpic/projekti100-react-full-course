import React from "react";
import reactDom from "react-dom";

const Greeting = () => {
  return <h1>hello world</h1>;
};

reactDom.render(<Greeting />, document.getElementById("root"));
