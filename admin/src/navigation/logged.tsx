import {createBrowserRouter} from "react-router-dom";
import {Error, Root, Categories, Location, Home, Users} from "pages";

export const loggedRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/location",
        element: <Location />,
      },
    ],
  },
]);
