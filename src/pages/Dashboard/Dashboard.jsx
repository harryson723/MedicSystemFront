import Navbar from "./componenets/Navbar";
import Sidebar from "./componenets/Sidebar";
import Welcome from "./componenets/Welcome";

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
export default function Dashboard({ children = <Welcome /> }) {
    return (
        <>
            <Navbar options={options} />
            <Sidebar />
            {children}
        </>
    );
}