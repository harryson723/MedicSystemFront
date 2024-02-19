import RegisterClient from "../pages/Client/RegisterClient";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Login/Login";
import {
    createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/register",
        element: <RegisterClient />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
            {
                path: "administration",
                element: <Dashboard />,
            },
            {
                path: "providers",
                element: <Dashboard />,
            },
            {
                path: "clients",
                element: <Dashboard />,
            },
        ],
    },
]);

export default router;