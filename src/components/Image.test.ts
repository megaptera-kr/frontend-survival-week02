import { render, screen } from "@testing-library/react";
import React from "react";
import Image from "./Image";

describe("Image 컴포넌트는", () => {
  test("'/images/test.jpg' 이미지가 화면에 보여져야 한다.", () => {
    render(React.createElement(Image, { src: "/images/test.jpg" }));

    const img = screen.getByRole("img");

    expect(img).toHaveAttribute("src", "/images/test.jpg");
  });

  test("넓이가 200px인 이미지가 화면에 보여져야 한다.", () => {
    render(React.createElement(Image, { src: "/images/test.jpg", width: 200 }));

    const img = screen.getByRole("img");

    expect(img).toHaveAttribute("width", "200");
  });
});
