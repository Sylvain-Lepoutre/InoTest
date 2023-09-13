import { Link, useLocation } from "react-router-dom";

import { Breadcrumb as GenericBreadcrumb } from "@components/sliderComponents/libraryComponents/Breadcrumb/Breadcrumb";

export const Breadcrumb = () => {
  const segments = useLocation()
    .pathname.split("/")
    .filter((value) => value !== "");

  const location = useLocation();

  return (
    <GenericBreadcrumb aria-label="Vous êtes ici" separator="/">
      <GenericBreadcrumb.SegmentList className="flex p-2">
        <GenericBreadcrumb.Segment className="py-2">
          <Link
            aria-current={location.pathname === "/" ? "page" : undefined}
            className="p-2 hover:underline hover:underline-offset-4 breadcrumbSegment"
            to="/"
          >
            Home
          </Link>
        </GenericBreadcrumb.Segment>

        {segments.map((segment, index) => {
          const url = `/${segments.slice(0, index + 1).join("/")}`;

          return (
            <GenericBreadcrumb.Segment className="py-2" key={index}>
              <Link
                aria-current={location.pathname === url ? "page" : undefined}
                className="p-2 hover:underline hover:underline-offset-4 breadcrumbSegment"
                to={url}
              >
                {segment.charAt(0).toUpperCase() + segment.slice(1)}
              </Link>
            </GenericBreadcrumb.Segment>
          );
        })}
      </GenericBreadcrumb.SegmentList>
    </GenericBreadcrumb>
  );
};
