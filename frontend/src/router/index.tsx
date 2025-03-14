import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Home from "../pages/Home";
import Devices from "../pages/Devices";
import LayoutUser from "../layout/user";

export const router = createBrowserRouter([
    {
        path:"/login",
        element: <Login />
    },
    {
        path: '/',
        element: <LayoutUser />,
        children:[
            {
                index:true,
                element: <Home />
            }
        ]
    },
    {
        path: '/devices',
        element: <LayoutUser />,
        children:[
            {
                index:true,
                element: <Devices />
            }
        ]
    }
])
