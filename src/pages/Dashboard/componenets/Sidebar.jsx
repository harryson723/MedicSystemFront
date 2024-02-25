import { Link } from "react-router-dom";
import Dropdown from "../../../components/Dropdown";

const options = [
    {
        name: "Clientes",
        items: [
            {
                name: "Crear Cliente",
                url: "/dashboard/clients/create"
            },
            {
                name: "Gestión de Clientes",
                url: "/dashboard/clients"
            }
        ],
    },
    {
        name: "Proveedores",
        items: [
            {
                name: "Crear Proveedor",
                url: "/dashboard/providers/create"
            },
            {
                name: "Gestión de Proveedores",
                url: "/dashboard/providers"
            }
        ],
    },
    {
        name: "Suscripciones",
        items: [
            {
                name: "Crear suscripcion",
                url: "/dashboard/suscriptions/create"
            },
            {
                name: "Gestión de Suscripciones",
                url: "/dashboard/suscriptions"
            }
        ],
    },
    {
        name: "Servicios",
        items: [
            {
                name: "Crear Servicio",
                url: "/dashboard/services/create"
            },
            {
                name: "Gestión de Servicios",
                url: "/dashboard/services"
            }
        ],
    },
];

export default function Sidebar() {
    return (
        <div className="sidebar top-0 bottom-0
             lg:left-0 p-2 w-[20%] overflow-y-auto text-center">
            {options.map(option => <Dropdown key={"Dropdown- " + option.name} options={option}/>)}
        </div>
    )
}

