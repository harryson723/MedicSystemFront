import useFormHandle from "../../hooks/useFormHandle";
import ButtonSubmit from "../../components/ButtonSubmit";
import Form from "../../components/Form";
import InputForm from "../../components/InputForm";
import SelectForm from "../../components/SelectForm";
import { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";
import verifyForm, { verifyDocument, verifySelect, verifyText } from "../../utils/verifyForm";
import Button from "../../components/Button";
import request from "../../utils/request";
import urls from "../../utils/urls";
import List from "../../components/List";
import Colunm from "../../components/Columns";
import UserList from "../../components/UserList";
import Alert from "../../components/Alert";

const options = [
  {
    label: "Medico",
    value: "MEDICO",
  },
  {
    label: "Psicologico",
    value: "PSICOLOGICO",
  },
  {
    label: "Veterinario",
    value: "VETERINARIO",
  },
];

const verifies = {
  name: verifyText,
  description: verifyText,
  typeService: verifySelect,
  price: verifyText,
  provider: verifyDocument
};

const initialForm = {
  name: "",
  description: "",
  typeService: "",
  price: "",
  providerId: "",
  provider: "",
}

export default function CreateService() {
  const { user } = useContext(UserContext);
  const [client, setClient] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const { form, handleForm, setForm } = useFormHandle(initialForm, verifies);
  const [showAlert, setShowAlert] = useState({
    show: false,
    message: "",
    type: "success"
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const parent = e.target.parentElement.parentElement;
    if (verifyForm(parent, verifies)) {
      delete form.provider
      console.log(form);
      const data = await request(
        urls.services.create,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + user.token,
          },
          body: JSON.stringify(form)
        }
      );
      form.provider = '';
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

  const searchUser = async e => {
    e.preventDefault();
    const value = e.target.parentElement.querySelector("input").value;
    const data = await request(
      urls.user.findByDocumentNumber + `?documentNumber=${value}&rol=PROVIDER`,
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
    setForm({
      ...form,
      providerId: data.id
    });
  };
  return (
    <div className="w-full">
      {showAlert.show && <Alert alert={showAlert} setShowAlert={setShowAlert} />}
      <Form>
        <div>
          <label htmlFor="name">Nombre:</label>
          <InputForm
            name="name"
            value={form.name}
            handleForm={handleForm}
            placeholder="Ingrese el nombre"
          ></InputForm>
        </div>
        <div>
          <label htmlFor="description">Descripcion:</label>
          <InputForm
            name="description"
            value={form.description}
            handleForm={handleForm}
            placeholder="Ingrese la descripcion"
          ></InputForm>
        </div>
        <div>
          <label htmlFor="typeService">Tipo de servicio:</label>
          <SelectForm id="typeService" defaultV="Seleccione" options={options} handleForm={handleForm} />
        </div>
        <div>
          <label htmlFor="price">Precio:</label>
          <InputForm
            name="price"
            value={form.price}
            handleForm={handleForm}
            placeholder="Ingrese el precio"
          ></InputForm>
        </div>
        <div>
          <label htmlFor="provider">Documento proveedor:</label>
          <InputForm
            name="provider"
            value={form.provider}
            handleForm={handleForm}
            placeholder="Ingrese el numero de documento"
          ></InputForm>
          <Button text="Buscar" onclick={searchUser} />
        </div>
        <ButtonSubmit handleSubmit={handleSubmit}></ButtonSubmit>
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
