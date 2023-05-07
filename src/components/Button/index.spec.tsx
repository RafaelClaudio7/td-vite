import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Button } from "./styles";

describe("Button component", () => {
  it("Should be 5", () => {
    expect(2).toBe(2);
  });
  test("renders with correct styles based on size prop", () => {
    const { getByTestId } = render(<Button size="sm" />);
    const button = getByTestId("button");
    console.log(button);
    expect(button).toHaveStyle("padding: 8px 30px");
    expect(button).toHaveStyle("font-size: 14px");
    fireEvent.mouseOver(button);
    expect(button).toHaveStyle("font-weight: 700");
    fireEvent.mouseOut(button);
    expect(button).toHaveStyle("font-weight: 400");
  });

  test("renders with correct styles based on outlined prop", () => {
    const { getByTestId } = render(<Button outlined />);
    const button = getByTestId("button");
    expect(button).toHaveStyle("background-color: black");
    expect(button).toHaveStyle("border: 1px solid green");
    fireEvent.mouseOver(button);
    expect(button).toHaveStyle("background-color: green");
    fireEvent.mouseOut(button);
    expect(button).toHaveStyle("background-color: black");
  });
});
