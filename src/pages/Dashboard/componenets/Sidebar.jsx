import { Link } from "react-router-dom";



export default function Sidebar({ options }) {

    const toggle = () => {
        document.getElementById('submenu').classList.toggle('hidden');
        document.getElementById('arrow').classList.toggle('rotate-90');
    };

    return (
        <div className="sidebar top-0 bottom-0 lg:left-0 p-2 w-[200px] overflow-y-auto text-center">
            <div className="p-2.5 flex justify-between rounded-md px-4 duration-300
               cursor-pointer hover:bg-[#0d5f96] hover:text-white" onClick={toggle}>
                <span >Clientes</span>
                <span className="text-sl" id="arrow">
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                </span>
            </div>
            <div className="text-left text-sm font-thin mt-2 w-4/5 mx-auto hidden" id="submenu">
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