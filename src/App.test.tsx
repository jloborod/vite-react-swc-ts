import { act, render, screen } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  const getButton = () => screen.getByRole("button");

  it("renders the App component", () => {
    render(<App />);
  });

  it("counts", () => {
    render(<App />);

    expect(getButton().textContent).toBe("count is 0");

    act(() => {
      getButton().click();
    });

    expect(getButton().textContent).toBe("count is 1");
  });
});
