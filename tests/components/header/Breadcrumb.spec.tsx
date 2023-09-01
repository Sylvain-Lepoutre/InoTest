import { render, screen, prettyDOM } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { Breadcrumb } from "@components/sliderComponents/libraryComponents/Breadcrumb/Breadcrumb";

describe("WAI-ARIA Roles, States, and Properties", () => {
  it("should have the `navigation` role", () => {
    render(
      <Breadcrumb separator="/">
        <Breadcrumb.SegmentList>
          <Breadcrumb.Segment>
            <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
          </Breadcrumb.Segment>
        </Breadcrumb.SegmentList>
      </Breadcrumb>
    );

    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("should have an accessible name for the landmark region", () => {
    render(
      <Breadcrumb aria-label="Vous êtes ici" separator="/">
        <Breadcrumb.SegmentList>
          <Breadcrumb.Segment>
            <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
          </Breadcrumb.Segment>
        </Breadcrumb.SegmentList>
      </Breadcrumb>
    );

    expect(screen.getByRole("navigation")).toHaveAccessibleName("Vous êtes ici");
  });

  it("should generate a link with `aria-current='page'` for the last segment", () => {
    render(
      <Breadcrumb separator="/" data-testid="breadcrumb">
        <Breadcrumb.SegmentList>
          <Breadcrumb.Segment>
            <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
          </Breadcrumb.Segment>
          <Breadcrumb.Segment>
            <Breadcrumb.Link href="/path">Path</Breadcrumb.Link>
          </Breadcrumb.Segment>
        </Breadcrumb.SegmentList>
      </Breadcrumb>
    );

    // console.log(prettyDOM(screen.getByTestId("breadcrumb")));

    expect(screen.getByText("Path")).toHaveAttribute("aria-current", "page");
  });
});

describe("Keyboard Interaction", () => {
  it("should move the focus onto the second link", async () => {
    render(
      <Breadcrumb separator="/">
        <Breadcrumb.SegmentList>
          <Breadcrumb.Segment>
            <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
          </Breadcrumb.Segment>
          <Breadcrumb.Segment>
            <Breadcrumb.Link href="/path">Path</Breadcrumb.Link>
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

describe("Errors", () => {
  it("should throw an error when used outside of the `Breadcrumb` component", () => {
    expect(() => render(<Breadcrumb.Segment />)).toThrowError(
      /^This component must be a child of the `SegmentList` component$/
    );
  });

  it("should throw an error when used outside of the `Breadcrumb` component", () => {
    expect(() => render(<Breadcrumb.SegmentList />)).toThrowError(
      "This component must be a child of the `Breadcrumb` component"
    );
  });
});

describe("Separators", () => {
  it("should have separator for each segments after first one", () => {
    render(
      <Breadcrumb separator="/" data-testid="breadcrumb">
        <Breadcrumb.SegmentList>
          <Breadcrumb.Segment>
            <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
          </Breadcrumb.Segment>
          <Breadcrumb.Segment>
            <Breadcrumb.Link href="/path">Path</Breadcrumb.Link>
          </Breadcrumb.Segment>
          <Breadcrumb.Segment>
            <Breadcrumb.Link href="/path/to">To</Breadcrumb.Link>
          </Breadcrumb.Segment>
        </Breadcrumb.SegmentList>
      </Breadcrumb>
    );

    const segmentsLists = screen.getAllByRole("listitem");
    const segmentsToTest = segmentsLists.slice(1);

    for (const segment of segmentsToTest) {
      const span = segment.querySelector("span");
      expect(span).toBeInTheDocument();
      expect(span).toHaveTextContent("/");
    }
  });
  it("should display the type of separator indicated in Segment-List props", () => {
    render(
      <Breadcrumb separator="/" data-testid="breadcrumb">
        <Breadcrumb.SegmentList separator="-">
          <Breadcrumb.Segment>
            <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
          </Breadcrumb.Segment>
          <Breadcrumb.Segment>
            <Breadcrumb.Link href="/path">Path</Breadcrumb.Link>
          </Breadcrumb.Segment>
          <Breadcrumb.Segment>
            <Breadcrumb.Link href="/path/to">To</Breadcrumb.Link>
          </Breadcrumb.Segment>
        </Breadcrumb.SegmentList>
      </Breadcrumb>
    );

    const segmentsLists = screen.getAllByRole("listitem");
    const segmentsToTest = segmentsLists.slice(1);

    for (const segment of segmentsToTest) {
      const span = segment.querySelector("span");
      expect(span).toBeInTheDocument();
      expect(span).toHaveTextContent("-");
    }
  });
});
it("should display the type of separator indicated in Segments props", () => {
  render(
    <Breadcrumb separator="/" data-testid="breadcrumb">
      <Breadcrumb.SegmentList>
        <Breadcrumb.Segment>
          <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
        </Breadcrumb.Segment>
        <Breadcrumb.Segment separator="-">
          <Breadcrumb.Link href="/path">Path</Breadcrumb.Link>
        </Breadcrumb.Segment>
        <Breadcrumb.Segment separator="-">
          <Breadcrumb.Link href="/path/to">To</Breadcrumb.Link>
        </Breadcrumb.Segment>
      </Breadcrumb.SegmentList>
    </Breadcrumb>
  );

  // console.log(prettyDOM(screen.getByTestId("breadcrumb")));

  const segmentsLists = screen.getAllByRole("listitem");
  const segmentsToTest = segmentsLists.slice(1);

  for (const segment of segmentsToTest) {
    const span = segment.querySelector("span");
    expect(span).toBeInTheDocument();
    expect(span).toHaveTextContent("-");
  }
});
