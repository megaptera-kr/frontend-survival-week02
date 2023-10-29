import React from "react";

import Greeting from "./components/Greeting";
import Image from "./components/Image";
import Counter from "./components/Counter";

export default function App() {
  return React.createElement(
    "div",
    null,
    React.createElement(Greeting, { name: "wholeman" }),
    React.createElement(Image, {
      src: "/images/test.jpg",
      alt: "Test Image",
      width: 200,
    }),
    React.createElement(Counter),
  );
}
