import useFormHandle from "../../hooks/useFormHandle";
import ButtonSubmit from "../../components/ButtonSubmit";
import Form from "../../components/Form";
import InputForm from "../../components/InputForm";
import SelectForm from "../../components/SelectForm";
import Button from "../../components/Button";
import urls from "../../utils/urls";
import request from "../../utils/request";
import UserContext from "../../contexts/UserContext";
import { useContext, useState } from "react";
import List from "../../components/List";
import Colunm from "../../components/Columns";
import UserList from "../../components/UserList";
import verifyForm, { verifyNumber } from "../../utils/verifyForm";

const options = [
  {
    label: "Activo",
    value: "available",
  },
  {
    label: "Deshabilitado",
    value: "disable",
  },
];

const verifies = {
  providerId: verifyNumber,
  clientId: verifyNumber,
  stauts: verifyNumber
};

const initialForm = {
  providerId: "",
  clientId: "",
  stauts: "",
};

export default function CreateSuscription() {
  const { user } = useContext(UserContext);
  const [client, setClient] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const { form, handleForm } = useFormHandle(initialForm, verifies);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const parent = e.target.parentElement.parentElement;
    if (verifyForm(parent)) {
    }
  };

  const searchUser = async (e, rol) => {
    e.preventDefault();
    const value = e.target.parentElement.querySelector("input").value;
    const data = await request(
      urls.user.findByDocumentNumber + `?documentNumber=${value}&rol=${rol}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + user.token,
        },
      }
    );
    setShowTable(true);
    if (data.error) return setClient([]);
    setClient([data]);
  };

  return (
    <div className="w-full">
      <Form>
        <div>
          <label htmlFor="providerId">Documento proveedor:</label>
          <InputForm
            name="providerId"
            value={form.providerId}
            handleForm={handleForm}
            placeholder="Ingrese el numero de documento"
          ></InputForm>
          <Button text="Buscar" onclick={(e) => searchUser(e, "PROVIDER")} />
        </div>
        <div>
          <label htmlFor="clientId">Documento cliente:</label>
          <InputForm
            name="clientId"
            value={form.clientId}
            handleForm={handleForm}
            placeholder="Ingrese el numero de documento"
          ></InputForm>
          <Button text="Buscar" onclick={(e) => searchUser(e, "CLIENT")} />
        </div>
        <div>
          <label htmlFor="status">Tipo de servicio:</label>
          <SelectForm id="status" defaultV="Seleccione" options={options} />
        </div>
        <ButtonSubmit value="Crear" handleSubmit={handleSubmit} />
      </Form>
      {showTable && (
        <List
          data={<UserList items={client} option="pi pi-check-square" />}
          title=""
        >
          <Colunm>Correo electronico</Colunm>
          <Colunm>Tipo de documento</Colunm>
          <Colunm>Numero de documento</Colunm>
          <Colunm>Nombre de usuario</Colunm>
          <Colunm>Nombres</Colunm>
          <Colunm>Apellidos</Colunm>
        </List>
      )}
    </div>
  );
}
