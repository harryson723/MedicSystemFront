import { Link } from "react-router-dom";

export default function Sidebar({ options }) {
    return (
        <div>
            <div>
                <span>Clientes</span>
                <Link to="/dashboard/createClient">Crear Cliente</Link>
            </div>
            <div>
                <span>Proveedores</span>
                <Link to="/dashboard/createProvider">Crear Proveedor</Link>
            </div>
            <div>
                <span>Suscripciones</span>
                <Link to="/dashboard/createSuscription">Crear suscripcion</Link>
            </div>
            <div>
                <span>Servicios</span>
                <Link to="/dashboard/createService">Crear Crear Servicio</Link>
            </div>
        </div>
    )
}