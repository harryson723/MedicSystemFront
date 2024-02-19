import InputForm from "../../components/InputForm";
import useFormHandle from "../../hooks/useFormHandle";
import ButtonSubmit from "../../components/ButtonSubmit";

export default function Login() {
    const { form, handleForm } = useFormHandle({
        username: '',
        password: '',
    });
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <form className="
                border
                rounded-xl p-14
                w-auto
                ">
                <h1 className="font-bold text-4xl mb-9">MEDIC SYSTEM</h1>
                <div>
                    <label htmlFor="username">Nombre de usuario</label>
                    <InputForm
                        name="username" value={form.username} handleForm={handleForm}  placeholder="Ingrese su usuario">
                        </InputForm>
                </div>
                <div>
                    <label htmlFor="password">Contraseña</label>
                    <InputForm
                     name="password" value={form.password} handleForm={handleForm} placeholder="Ingrese su contraseña">
                     </InputForm>
                </div>

                <ButtonSubmit></ButtonSubmit>
            </form>
        </div>
    )
}