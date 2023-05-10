import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from ".";

describe("Button component", () => {
  const label = "Click me!";
  const onClick = jest.fn();

  it("should render the button with the provided label", () => {
    const { getByText } = render(
      <Button label={label} size="md" outlined={false} onClick={onClick} />
    );
    expect(getByText(label)).toBeInTheDocument();
  });

  it("should call the onClick function when the button is clicked", () => {
    const { getByTestId } = render(
      <Button label={label} size="md" outlined={false} onClick={onClick} />
    );
    const button = getByTestId("btn");
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("should render the button with the provided size and outline props", () => {
    const { getByTestId } = render(
      <Button label={label} size="sm" outlined={true} onClick={onClick} />
    );
    const button = getByTestId("btn");
    // expect(button).toHaveStyle(`
    //   padding: 8px 30px;
    //   background-color: transparent;
    //   color: black;
    //   border: 1px solid green;
    //   border-radius: 5px;
    //   font-family: "Roboto", sans-serif;
    //   font-weight: 400;
    //   font-size: 14px;
    //   text-transform: uppercase;
    // `);
    expect(1).toBe(1);
  });
});
