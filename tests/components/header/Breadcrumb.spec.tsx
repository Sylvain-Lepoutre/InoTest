import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { Breadcrumb } from "@components/sliderComponents/libraryComponents/Breadcrumb/Breadcrumb";

describe("WAI-ARIA Roles, States, and Properties", () => {
  it("should have the `navigation` role", () => {
    render(
      <Breadcrumb separator="/">
        <Breadcrumb.SegmentList>
          <Breadcrumb.Segment noSeparator>
            <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
          </Breadcrumb.Segment>
        </Breadcrumb.SegmentList>
      </Breadcrumb>
    );

    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("should have an accessible name for the landmark region", () => {
    render(
      <Breadcrumb aria-label="Fil d'Ariane" separator="/">
        <Breadcrumb.SegmentList>
          <Breadcrumb.Segment noSeparator>
            <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
          </Breadcrumb.Segment>
        </Breadcrumb.SegmentList>
      </Breadcrumb>
    );

    expect(screen.getByRole("navigation")).toHaveAccessibleName("Fil d'Ariane");
  });

  it("should generate a link with `aria-current='page'` for the last segment", () => {
    render(
      <Breadcrumb separator="/">
        <Breadcrumb.SegmentList>
          <Breadcrumb.Segment noSeparator>
            <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
          </Breadcrumb.Segment>
          <Breadcrumb.Segment>
            <Breadcrumb.Link aria-current="page" href="/path">
              Path
            </Breadcrumb.Link>
          </Breadcrumb.Segment>
        </Breadcrumb.SegmentList>
      </Breadcrumb>
    );

    expect(screen.getByText("Path")).toHaveAttribute("aria-current", "page");
  });
});

describe("Keyboard Interaction", () => {
  it("should move the focus onto the second link", async () => {
    render(
      <Breadcrumb separator="/">
        <Breadcrumb.SegmentList>
          <Breadcrumb.Segment noSeparator>
            <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
          </Breadcrumb.Segment>
          <Breadcrumb.Segment>
            <Breadcrumb.Link aria-current="page" href="/path">
              Path
            </Breadcrumb.Link>
          </Breadcrumb.Segment>
        </Breadcrumb.SegmentList>
      </Breadcrumb>
    );

    const user = userEvent.setup();
    await user.tab();
    await user.tab();

    expect(screen.getByText("Path")).toHaveFocus();
  });
});
