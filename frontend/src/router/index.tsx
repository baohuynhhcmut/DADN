import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import HomePage2 from "../pages/HomePage/HomePage2";
import Messages from "../pages/Messages/Messages";
import Home from "../pages/Home";
import LayoutUser from "../layout/user";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <LayoutUser />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "home2",
        element: <HomePage2 />,
      },
      {
        path: "messages",
        element: <Messages />,
      },
    ],
  },
]);
