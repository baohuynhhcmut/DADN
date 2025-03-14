import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import Devices from "../pages/Devices";
import LayoutUser from "../layout/user";
import Profile from "../pages/Profile";

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
        index: true,
        element: <Home />,
      },
      {
        path: "devices",
        element: <Devices />,
      },
      {
        path: "/profile",
        element: <Profile />
      }
    ],
  },
]);
   

