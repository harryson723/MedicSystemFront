import useFormHandle from "../../../hooks/useFormHandle";
import ButtonSubmit from "../../../components/ButtonSubmit";
import Form from "../../../components/Form";
import InputForm from "../../../components/InputForm";

export default function CreateSuscription() {
  const { form, handleForm } = useFormHandle({
    providerId: "",
    clientId: "",
    stauts: "",
  });
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
      </div>
      <div>
        <label htmlFor="clientId">Documento cliente:</label>
        <InputForm
          name="clientId"
          value={form.clientId}
          handleForm={handleForm}
          placeholder="Ingrese el numero de documento"
        ></InputForm>
      </div>
      <div>
        <label htmlFor="status">Estado:</label>
        <select name="status" id="status"></select>
      </div>
      <ButtonSubmit></ButtonSubmit>
    </Form>
  );
}
