import useFormHandle from "../../../hooks/useFormHandle";

export default function FormCreateUser() {
    const { form, handleForm } = useFormHandle({
        firtsName: '',
        lastName: '',
        username: '',
        email: '',
        documentType: '',
        document: '',
        phone: '',
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
                    <label htmlFor="firtsName">Nombre de usuario</label>
                    <InputForm
                        name="firtsName" value={form.firtsName} handleForm={handleForm} placeholder="Ingrese su nombre">
                    </InputForm>
                </div>
                <div>
                    <label htmlFor="lastName">Nombre de usuario</label>
                    <InputForm
                        name="lastName" value={form.lastName} handleForm={handleForm} placeholder="Ingrese su apellido">
                    </InputForm>
                </div>
                <div>
                    <label htmlFor="username">Nombre de usuario</label>
                    <InputForm
                        name="username" value={form.username} handleForm={handleForm} placeholder="Ingrese su usuario">
                    </InputForm>
                </div>
                <div>
                    <label htmlFor="email">Nombre de usuario</label>
                    <InputForm
                        name="email" value={form.email} handleForm={handleForm} placeholder="Ingrese su usuario">
                    </InputForm>
                </div>
                <div>
                    <label htmlFor="documentType">Nombre de usuario</label>
                    <select name="documentType" id="documentType">
                        
                    </select>
                </div>
                <div>
                    <label htmlFor="document">Nombre de usuario</label>
                    <InputForm
                        name="document" value={form.document} handleForm={handleForm} placeholder="Ingrese su usuario">
                    </InputForm>
                </div>
                <div>
                    <label htmlFor="phone">Nombre de usuario</label>
                    <InputForm
                        name="phone" value={form.phone} handleForm={handleForm} placeholder="Ingrese su usuario">
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