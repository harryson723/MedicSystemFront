import UserList from "../../components/ClientList";
import Colunm from "../../components/Columns";
import List from "../../components/List";
import useRequest from "../../hooks/useRequest";
import urls from "../../utils/urls";

export default function GetProvider() {

    const { data: providers } =  useRequest(urls.user.provider);

    return (
        <>
            <List data={<UserList items={providers} />} title="Gestión de proveedores">
                <Colunm>Correo electronico</Colunm>
                <Colunm>Tipo de documento</Colunm>
                <Colunm>Numero de documento</Colunm>
                <Colunm>Nombre de usuario</Colunm>
                <Colunm>Nombres</Colunm>
                <Colunm>Apellidos</Colunm>
            </List>
        </>
    )
}