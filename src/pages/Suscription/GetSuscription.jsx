import Colunm from "../../components/Columns";
import List from "../../components/List";
import useRequest from "../../hooks/useRequest";
import urls from "../../utils/urls";
import SuscriptionList from "./components/SuscriptionList";

export default function GetSuscription() {

    const { data: suscriptions } = useRequest(urls.suscription.get);

    console.log(suscriptions);

    return (
        <>
            <List data={<SuscriptionList items={suscriptions} />} title="Gestión de proveedores">
                <Colunm>ID suscripción</Colunm>
                <Colunm>Estado</Colunm>
                <Colunm>Proveedor</Colunm>
                <Colunm>Cliente</Colunm>
            </List>
        </>
    )
}