import { render } from "@testing-library/react";
import Home from "../pages/Home";

describe("Jest", () => {
  it("should be true", () => {
    expect(1).toBe(1);
  });

  it("should display element", () => {
    render(<Home />);
  });
});
