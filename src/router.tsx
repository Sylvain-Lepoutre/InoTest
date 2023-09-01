import { createBrowserRouter } from "react-router-dom";

import AboutUs from "@pages/AboutUs";
import ErrorPage from "@pages/ErrorPage";
import GetStarted from "@pages/GetStarted";
import Home from "@pages/Home";
import Path1 from "@pages/Path1";
import Path2 from "@pages/Path2";
import Root from "./routes/Root";
import { Library } from "@pages/Library";
import { Inotest } from "@pages/Inotest";
import { InotestPersona1 } from "@components/inotestComponents/InotestPersona1";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/inotest",
        element: <Inotest />,
      },
      {
        path: "/inotest/persona1",
        element: <InotestPersona1 />,
      },
      {
        path: "/library",
        element: <Library />,
        children: [
          {
            path: "test",
            element: <p>Hello Test!</p>,
          },
        ],
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/getstarted",
        element: <GetStarted />,
      },
      {
        path: "/path1",
        element: <Path1 />,
      },
      {
        path: "/path2",
        element: <Path2 />,
      },
    ],
  },
]);
