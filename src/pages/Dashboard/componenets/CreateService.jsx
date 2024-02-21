import useFormHandle from "../../../hooks/useFormHandle";
import ButtonSubmit from "../../../components/ButtonSubmit";
import Form from "../../../components/Form";
import InputForm from "../../../components/InputForm";

export default function CreateService() {
  const { form, handleForm } = useFormHandle({
    name: "",
    description: "",
    typeService: "",
    price: "",
    status: "",
    provider_id: "",
  });
  return (
    <Form>
      <div>
        <label htmlFor="firtsName">Nombre:</label>
        <InputForm
          name="firtsName"
          value={form.firtsName}
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
        <select name="typeService" id="typeService"></select>
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
      <ButtonSubmit></ButtonSubmit>
    </Form>
  );
}
