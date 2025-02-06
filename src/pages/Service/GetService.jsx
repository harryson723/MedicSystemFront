import Colunm from "../../components/Columns";
import List from "../../components/List";
import useRequest from "../../hooks/useRequest";
import urls from "../../utils/urls";
import ServiceList from "./components/ServiceList";

export default function GetService() {

    const { data: services } =  useRequest(urls.services.get);

    return (
        <>
            <List data={<ServiceList items={services}/>} title="Gestión de proveedores">
                <Colunm>ID servicio</Colunm>
                <Colunm>Proveedor</Colunm>
                <Colunm>Nombre</Colunm>
                <Colunm>Estado</Colunm>
                <Colunm>Tipo</Colunm>  
                <Colunm>Precio</Colunm>
            </List>
        </>
    )
}