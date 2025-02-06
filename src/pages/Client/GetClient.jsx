import UserList from "../../components/UserList";
import Colunm from "../../components/Columns";
import List from "../../components/List";
import useRequest from "../../hooks/useRequest";
import urls from "../../utils/urls";

export default function GetClient() {

    const { data: clients } = useRequest(urls.user.client);

    return (
        <>
            <List
                data={<UserList items={clients}
                    option="pi pi-ellipsis-h text-2xl"
                />}
                title="Gestión de clientes">
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