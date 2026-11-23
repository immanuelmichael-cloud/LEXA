import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import App from "./App";

describe("App", () => {
  it("renders the hero heading and the four core solutions", () => {
    render(<App />);

    expect(screen.getByRole("heading", { level: 1 }).textContent).toMatch(/Smarter Systems/);
    expect(screen.getAllByRole("heading", { level: 4 })).toHaveLength(4);
  });

  it("links every nav item to a section that exists", () => {
    const { container } = render(<App />);

    for (const id of ["about", "solutions", "founders", "contact"]) {
      expect(container.querySelector(`#${id}`)).not.toBeNull();
    }
  });
});
