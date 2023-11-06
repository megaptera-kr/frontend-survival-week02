import { render, screen } from "@testing-library/react";
import React from "react";
import Greeting from "./Greeting";

describe("Greeting 컴포넌트는", () => {
  test("'wholeman' 에게 인사한다.", () => {
    render(React.createElement(Greeting, { name: "wholeman" }));

    const gretting = screen.getByText("Hello, wholeman!");

    expect(gretting).toBeInTheDocument();
  });
});
