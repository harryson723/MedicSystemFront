import useFormHandle from "../../hooks/useFormHandle";
import ButtonSubmit from "../../components/ButtonSubmit";
import Form from "../../components/Form";
import InputForm from "../../components/InputForm";
import SelectForm from "../../components/SelectForm";
import Button from "../../components/Button";
import useRequest from "../../hooks/useRequest";
import urls from "../../utils/urls";
import request from "../../utils/request";
import useGetData from "../../hooks/useGetData";

const options = [
  {
    label: "Activo",
    value: "available"
  },
  {
    label: "Deshabilitado",
    value: "disable"
  }
];

export default function CreateSuscription() {
  const { form, handleForm } = useFormHandle({
    providerId: "",
    clientId: "",
    stauts: "",
  });

  const handleSubmit = async e => {
    e.preventDefault();
  }

  const searchUser = async e => {
    e.preventDefault();
    const value = e.target.parentElement.querySelector('input').value;
    const data = await request(urls.user.findByDocumentNumber + value);
    console.log(data);
  }

  return (
    <Form>
      <div>
        <label htmlFor="providerId">Documento proveedor:</label>
        <InputForm
          name="providerId"
          value={form.providerId}
          handleForm={handleForm}
          placeholder="Ingrese el numero de documento"
        ></InputForm>
        <Button text="Buscar" onclick={searchUser} />
      </div>
      <div>
        <label htmlFor="clientId">Documento cliente:</label>
        <InputForm
          name="clientId"
          value={form.clientId}
          handleForm={handleForm}
          placeholder="Ingrese el numero de documento"
        ></InputForm>
        <Button text="Buscar" onclick={searchUser} />
      </div>
      <div>
        <label htmlFor="status">Tipo de servicio:</label>
        <SelectForm id="status" defaultV="Seleccione" options={options} />
      </div>
      <ButtonSubmit value="Crear" handleSubmit={handleSubmit} />
    </Form>
  );
}
