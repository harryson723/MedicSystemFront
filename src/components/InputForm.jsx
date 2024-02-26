export default function InputForm({ name, value, handleForm, placeholder, type = "text" }) {
    return (
        <div>
            <input
                name={name}
                id={name}
                className="
                border
                border-gray-300
                rounded-xl
                w-100 h-14 p-6 mt-3"
                type={type}
                value={value}
                onChange={handleForm}
                placeholder={placeholder} />
        </div>
    )
}