import { Link, useLocation } from "react-router-dom";

import { Breadcrumb as GenericBreadcrumb } from "@components/Breadcrumb/Breadcrumb";

export const Breadcrumb = () => {
  const segments = useLocation()
    .pathname.split("/")
    .filter((value) => value !== "");

  return (
    <GenericBreadcrumb aria-label="Vous êtes ici" separator="/">
      <GenericBreadcrumb.SegmentList className="flex p-2">
        <GenericBreadcrumb.Segment className="py-2" noSeparator>
          <Link
            className="p-2 focus:bg-black focus:text-white transition ease-in-out duration-500 hover:underline hover:underline-offset-4"
            to="/"
          >
            Home
          </Link>
        </GenericBreadcrumb.Segment>

        {segments.map((segment, index) => (
          <GenericBreadcrumb.Segment className="py-2" key={index}>
            <Link
              className="p-2 focus:bg-black focus:text-white transition ease-in-out duration-500 hover:underline hover:underline-offset-4"
              to={`/${segments.slice(0, index + 1).join("/")}`}
            >
              {segment.charAt(0).toUpperCase() + segment.slice(1)}
            </Link>
          </GenericBreadcrumb.Segment>
        ))}
      </GenericBreadcrumb.SegmentList>
    </GenericBreadcrumb>
  );
};
