import { act, render, screen } from "@testing-library/react";

import viteLogo from "/vite.svg";
import reactLogo from "@/assets/react.svg";
import App from "@/App";

describe("App", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("renders anchor with viteLogo and href 'https://vitejs.dev' and target '_blank'", () => {
    const viteLogoImage = screen.getByAltText("Vite logo");
    const viteLogoLink = viteLogoImage.closest("a")!;

    // Image
    expect(viteLogoImage).toHaveAttribute("src", viteLogo);
    expect(viteLogoImage).toHaveAttribute("class", "logo");
    expect(viteLogoImage).toHaveAttribute("alt", "Vite logo");

    // Link
    expect(viteLogoLink).toHaveAttribute("href", "https://vitejs.dev");
    expect(viteLogoLink).toHaveAttribute("target", "_blank");
  });

  it("renders anchor with react logo and href 'https://react.dev' and target '_blank'", () => {
    const reactLogoImage = screen.getByAltText("React logo");
    const reactLogoLink = reactLogoImage.closest("a")!;

    // Image
    expect(reactLogoImage).toHaveAttribute("src", reactLogo);
    expect(reactLogoImage).toHaveAttribute("class", "logo react");
    expect(reactLogoImage).toHaveAttribute("alt", "React logo");

    // Link
    expect(reactLogoLink).toHaveAttribute("href", "https://react.dev");
    expect(reactLogoLink).toHaveAttribute("target", "_blank");
  });

  it("renders h1 with text 'Vite + React''", () => {
    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
    expect(heading.textContent).toBe("Vite + React");
  });

  it("counts on button click", () => {
    const getButton = () => screen.getByRole("button");

    expect(getButton().textContent).toBe("count is 0");

    act(() => {
      getButton().click();
    });

    expect(getButton().textContent).toBe("count is 1");
  });
});
