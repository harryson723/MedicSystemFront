import useFormHandle from "../hooks/useFormHandle";
import request from "../utils/request";
import urls from "../utils/urls";
import verifyForm, {
  verifyDocument,
  verifyEmail,
  verifyNumber,
  verifyPassword,
  verifyPhone,
  verifySelect,
  verifyText,
} from "../utils/verifyForm";
import ButtonSubmit from "./ButtonSubmit";
import Form from "./Form";
import InputForm from "./InputForm";
import SelectForm from "./SelectForm";

const options = [
  {
    label: "CEDULA DE CIUDADANIA",
    value: "cedula de ciudadania",
  },
  {
    label: "TARJETA DE IDENTIDAD",
    value: "tarjeta de identidad",
  },
];

const verifies = {
  firstname: verifyText,
  lastname: verifyText,
  username: verifyText,
  email: verifyEmail,
  documentType: verifySelect,
  document: verifyDocument,
  phone: verifyPhone,
  password: verifyPassword,
};

export default function FormCreateUser({ rol = "client" }) {
  const { form, handleForm } = useFormHandle(
    {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      documentType: "",
      document: "",
      phone: "",
      password: "",
      rol,
    },
    verifies
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const parent = e.target.parentElement.parentElement;
    if (verifyForm(parent, verifies)) {
      const res = await request(urls.user.create, {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYW50aWFnbyIsImlhdCI6MTcwODgyMjQ4NiwiZXhwIjoxNzA4OTA4ODg2fQ.Ab6g3UjOZ7NGFrStonbWj5WjTqB8to1ys_fGF-QTg_g",
        },
        body: JSON.stringify({
          ...form,
          rol: [form.rol.toUpperCase()],
        }),
      });
      console.log(res);
    }
  };
  return (
    <Form>
      <div>
        <label htmlFor="firstname">Nombre:</label>
        <InputForm
          name="firstname"
          value={form.firstname}
          handleForm={handleForm}
          placeholder="Ingrese su nombre"
        ></InputForm>
      </div>
      <div>
        <label htmlFor="lastname">Apellido:</label>
        <InputForm
          name="lastname"
          value={form.lastname}
          handleForm={handleForm}
          placeholder="Ingrese su apellido"
        ></InputForm>
      </div>
      <div>
        <label htmlFor="username">Nombre de usuario:</label>
        <InputForm
          name="username"
          value={form.username}
          handleForm={handleForm}
          placeholder="Ingrese su usuario"
        ></InputForm>
      </div>
      <div>
        <label htmlFor="email">Correo electronico:</label>
        <InputForm
          name="email"
          value={form.email}
          handleForm={handleForm}
          placeholder="Ingrese su usuario"
        ></InputForm>
      </div>
      <div>
        <label htmlFor="documentType">Tipo de documento:</label>
        <SelectForm id="documentType" defaultV="Seleccione" options={options} handleForm={handleForm} />
      </div>
      <div>
        <label htmlFor="document">Numero de documento:</label>
        <InputForm
          name="document"
          value={form.document}
          handleForm={handleForm}
          placeholder="Ingrese su usuario"
        ></InputForm>
      </div>
      <div>
        <label htmlFor="phone">Telefono:</label>
        <InputForm
          name="phone"
          value={form.phone}
          handleForm={handleForm}
          placeholder="Ingrese su usuario"
        ></InputForm>
      </div>
      <div>
        <label htmlFor="password">Contraseña</label>
        <InputForm
          name="password"
          value={form.password}
          handleForm={handleForm}
          placeholder="Ingrese su contraseña"
          type="password"
        ></InputForm>
      </div>

      <ButtonSubmit handleSubmit={handleSubmit}></ButtonSubmit>
    </Form>
  );
}
