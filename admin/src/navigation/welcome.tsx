import {Error, Login} from "pages";
import {createBrowserRouter} from "react-router-dom";

export const welcomeRouter = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
    ],
  },
]);
