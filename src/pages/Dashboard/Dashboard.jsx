import { Outlet } from "react-router-dom";
import Navbar from "./componenets/Navbar";
import Sidebar from "./componenets/Sidebar";

const options = [
    {
        option: 'Administración',
        url: '/dashboard/administration'
    },
    {
        option: 'Proveedores',
        url: '/dashboard/providers'
    },
    {
        option: 'Clientes',
        url: '/dashboard/clients'
    },
];
export default function Dashboard() {
    return (
        <>
            <Navbar options={options} />
            <div className="flex">
                <Sidebar />
                 <Outlet></Outlet>
            </div>
        </>
    );
}