import useFormHandle from "../hooks/useFormHandle";
import ButtonSubmit from "./ButtonSubmit";
import Form from "./Form";
import InputForm from "./InputForm";

export default function FormCreateUser({ rol = "client" }) {
  const { form, handleForm } = useFormHandle({
    firtsName: "",
    lastName: "",
    username: "",
    email: "",
    documentType: "",
    document: "",
    phone: "",
    password: "",
    rol,
  });
  return (
    <Form>
      <div>
        <label htmlFor="firtsName">Nombre:</label>
        <InputForm
          name="firtsName"
          value={form.firtsName}
          handleForm={handleForm}
          placeholder="Ingrese su nombre"
        ></InputForm>
      </div>
      <div>
        <label htmlFor="lastName">Apellido:</label>
        <InputForm
          name="lastName"
          value={form.lastName}
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
        <select name="documentType" id="documentType"></select>
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
        ></InputForm>
      </div>

      <ButtonSubmit></ButtonSubmit>
    </Form>
  );
}
