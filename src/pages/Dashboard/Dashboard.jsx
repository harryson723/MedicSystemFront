import Navbar from "./componenets/Navbar";
import banner1 from '../../assets/img/dashboard/baner1.jpg';
import banner2 from '../../assets/img/dashboard/baner2.jpg';

const options = [
    {
        option: 'Administración',
        url: 'administration'
    },
    {
        option: 'Proveedores',
        url: 'providers'
    },
    {
        option: 'Clientes',
        url: 'clients'
    },
];
export default function Dashboard() {

    return (
        <>
            <Navbar options={options}></Navbar>
            <div>
                <div className="flex">
                    <div>
                        <h1 className="text-5xl ml-10 mt-16">MEDIC SYSTEM</h1>
                        <h2 className="text-3xl ml-10">
                            Sistema Integral de Gestión de Citas para Profesionales de la Salud y Psicólogos
                        </h2>
                        <p className="ml-10 mt-7">Es un placer recibirte nuevamente en Medic System, donde tu salud y bienestar son nuestra máxima prioridad. Queremos agradecerte por elegirnos como tu plataforma de gestión de citas y cuidado de la salud. Estamos emocionados de seguir siendo tu compañero confiable en este viaje de atención médica y psicológica.</p>
                    </div>
                    <img className="img-radius-banner1" src={banner1} alt="" />
                </div>
                <div className="flex">
                    <img className="img-radius-banner2" src={banner2} alt="" />
                    <p className="ml-10 mt-52">Gracias por ser parte de Medic System. Estamos emocionados de continuar brindándote un servicio de calidad y de acompañarte en tu camino hacia una vida más saludable. ¡Bienvenido de nuevo y adelante hacia un bienestar duradero!</p>
                </div>
            </div>
        </>
    );
}