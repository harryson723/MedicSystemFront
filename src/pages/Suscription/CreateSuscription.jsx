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
import verifyForm, {
  verifyDocument,
  verifySelect,
} from "../../utils/verifyForm";
import Alert from "../../components/Alert";

const options = [
  {
    label: "Disponible",
    value: "AVAILABLE",
  },
  {
    label: "No disponible",
    value: "DISABLE",
  },
];

const verifies = {
  provider: verifyDocument,
  client: verifyDocument,
  status: verifySelect
};

const initialForm = {
  providerId: "",
  clientId: "",
  provider: "",
  client: "",
  status: "",
};

export default function CreateSuscription() {
  const { user } = useContext(UserContext);
  const { form, handleForm } = useFormHandle(initialForm, verifies);
  const [client, setClient] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [showAlert, setShowAlert] = useState({
    show: false,
    message: "",
    type: "success"
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const parent = e.target.parentElement.parentElement;
    if (verifyForm(parent, verifies)) {
      const data = await request(
        urls.suscription.create,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + user.token,
          },
          body: JSON.stringify({
            clientId: form.clientId,
            providerId: form.providerId,
            status: form.status
          })
        }
      );
      setShowAlert({
        show: true,
        message: "Suscripción creada con exito",
        type: "success"
      });
      return;
    }
    setShowAlert({
      show: true,
      message: "Error en el envio de los datos",
      type: "error"
    });
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
    if (rol == 'CLIENT') setForm({
      ...form,
      clientId: data.id
    });
    else if (rol == 'PROVIDER') setForm({
      ...form,
      providerId: data.id
    });
  };

  return (
    <div className="w-full">
      {showAlert.show && <Alert alert={showAlert} setShowAlert={setShowAlert} />}
      <Form>
        <div>
          <label htmlFor="provider">Documento proveedor:</label>
          <InputForm
            name="provider"
            value={form.provider}
            handleForm={handleForm}
            placeholder="Ingrese el numero de documento"
          ></InputForm>
          <Button text="Buscar" onclick={(e) => searchUser(e, "PROVIDER")} />
        </div>
        <div>
          <label htmlFor="client">Documento cliente:</label>
          <InputForm
            name="client"
            value={form.client}
            handleForm={handleForm}
            placeholder="Ingrese el numero de documento"
          ></InputForm>
          <Button text="Buscar" onclick={(e) => searchUser(e, "CLIENT")} />
        </div>
        <div>
          <label htmlFor="status">Tipo de servicio:</label>
          <SelectForm id="status" defaultV="Seleccione" options={options} handleForm={handleForm} />
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
