import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Counter from "./Counter";

describe("Counter 컴포넌트는", () => {
  test("'+3' 버튼을 클릭하면 count가 '3' 증가 한다.", async () => {
    render(React.createElement(Counter));

    const btn = screen.getByRole("button", { name: /3/ });

    await fireEvent.click(btn);

    const count = screen.getByText(/Count:/).innerHTML;

    expect(count).toBe("Count: 3");
  });
});
