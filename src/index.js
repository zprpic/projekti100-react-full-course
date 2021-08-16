import React from "react";
import reactDom from "react-dom";

const Greeting = () => {
  return <h1>This is Prle and this is my first component</h1>;
};

reactDom.render(<Greeting />, document.getElementById("root"));
