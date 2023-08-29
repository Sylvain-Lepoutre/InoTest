import { render, screen, getByRole, queryByRole } from "@testing-library/react";
import { expect, it } from "vitest";

import { Breadcrumb } from "@components/header/Breadcrumb_";

it("should have the `navigation` role", () => {
  render(<Breadcrumb label="Fil d'Ariane" path="/path/to/the/page" />);

  expect(screen.getByRole("navigation")).toBeInTheDocument();
});

it("should have an accessible name for the landmark region", () => {
  render(<Breadcrumb label="Fil d'Ariane" path="/path/to/the/page" />);

  expect(screen.getByRole("navigation")).toHaveAccessibleName("Fil d'Ariane");
});

it("should generate a link with `aria-current='page'` for the last segment", () => {
  render(<Breadcrumb label="Fil d'Ariane" path="/path/to/the/page" />);

  const listItems = screen.getByRole("navigation").querySelectorAll("li");
  const lastListItem = listItems[listItems.length - 1];

  expect(getByRole(lastListItem, "link")).toBeInTheDocument();
});

it("should not generate a link for the last segment", () => {
  render(<Breadcrumb label="Fil d'Ariane" linkForLast={false} path="/path/to/the/page" />);

  const listItems = screen.getByRole("navigation").querySelectorAll("li");
  const lastListItem = listItems[listItems.length - 1];

  expect(queryByRole(lastListItem, "link")).not.toBeInTheDocument();
});
