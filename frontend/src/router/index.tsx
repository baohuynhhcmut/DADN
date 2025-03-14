import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import App from "../App";
import Home from "../pages/Home";
import LayoutUser from "../layout/user";

export const router = createBrowserRouter([
    {
        path:"/login",
        element: <Login />
    },
    {
        path: '/',
        element: <App />
    },
    {
        path: '/home',
        element: <LayoutUser />
    }
])
