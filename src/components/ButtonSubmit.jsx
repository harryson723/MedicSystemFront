export default function ButtonSubmit({ value, handleSubmit }) {
    return (
        <div className="flex items-center">
            <input
                className="
                border
                border-gray-300
                rounded-xl
                w-100 p-2 mt-3 mb-5 h-10
            "
                type="submit" value={value} onSubmit={handleSubmit} />
        </div>
    )
}