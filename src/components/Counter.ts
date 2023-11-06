import React, { createElement, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = (value: number) => {
    setCount(count + value);
  };

  return createElement(
    React.Fragment,
    null,
    React.createElement("p", null, `Count: ${count}`),
    ...[1, 2, 3, 4, 5].map((i) => React.createElement(
      "button",
      {
        key: i,
        type: "button",
        onClick: () => handleClick(i),
      },
      `+${i}`,
    )),
  );
}

export default Counter;
