import { render, screen, prettyDOM } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { Checkbox } from "@components/sliderComponents/libraryComponents/Checkbox/Checkbox";

describe("WAI-ARIA Roles, States, and Properties", () => {
  it("should have the 'checkbox' role", () => {
    render(
      <Checkbox>
        <Checkbox.Legend>Test</Checkbox.Legend>
        <Checkbox.Label>
          <Checkbox.Input />
          Case1
        </Checkbox.Label>
      </Checkbox>
    );

    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  it("should have an accessible label", () => {
    render(
      <Checkbox data-testid="checkbox">
        <Checkbox.Legend>Test</Checkbox.Legend>
        <Checkbox.Label htmlFor="box1">
          <Checkbox.Input id="box1" />
          Case1
        </Checkbox.Label>
      </Checkbox>
    );

    expect(screen.getByRole("checkbox")).toHaveAccessibleName("Case1");
  });

  it("should have 'aria-checked=true' when checkbox are checked", async () => {
    render(
      <Checkbox data-testid="checkbox">
        <Checkbox.Legend>Test</Checkbox.Legend>
        <Checkbox.Label htmlFor="box1">
          <Checkbox.Input id="box1" data-testid="test" />
          Case1
        </Checkbox.Label>
      </Checkbox>
    );

    const user = userEvent.setup();
    await user.click(screen.getByTestId("test"));

    expect(screen.getByTestId("test")).toHaveAttribute("aria-checked", "true");
  });

  it("should have 'aria-checked=false' when checkbox are not checked", async () => {
    render(
      <Checkbox data-testid="checkbox">
        <Checkbox.Legend>Test</Checkbox.Legend>
        <Checkbox.Label htmlFor="box1">
          <Checkbox.Input id="box1" data-testid="test" />
          Case1
        </Checkbox.Label>
      </Checkbox>
    );

    const user = userEvent.setup();
    await user.click(screen.getByTestId("test"));
    await user.click(screen.getByTestId("test"));

    expect(screen.getByTestId("test")).toHaveAttribute("aria-checked", "false");
  });

  it("should have a 'group' role ", () => {
    render(
      <Checkbox data-testid="checkbox">
        <Checkbox.Legend>Test</Checkbox.Legend>
        <Checkbox.Label htmlFor="box1">
          <Checkbox.Input id="box1" />
          Case1
        </Checkbox.Label>
        <Checkbox.Label htmlFor="box2">
          <Checkbox.Input id="box2" />
          Case1
        </Checkbox.Label>
      </Checkbox>
    );

    expect(screen.getByRole("group")).toBeInTheDocument();
  });

  it("should have the same 'id' on the checkbox group and on the checkbox group legend", () => {
    render(
      <Checkbox data-testid="checkbox">
        <Checkbox.Legend>Test</Checkbox.Legend>
        <Checkbox.Label htmlFor="box1">
          <Checkbox.Input id="box1" data-testid="test" />
          Case1
        </Checkbox.Label>
      </Checkbox>
    );

    const checkboxGroup = screen.getByTestId("checkbox");
    const checkboxGroupeLegend = screen.getByText("Test");

    expect(checkboxGroup).toHaveAttribute("aria-labelledby", checkboxGroupeLegend.getAttribute("id"));
  });
});
