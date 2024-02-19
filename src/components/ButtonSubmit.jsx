export default function ButtonSubmit({ value, handleSubmit }) {
    return (
        <div>
            <input
                className="
                border border-gray-300
                w-100"
                type="submit" value={value} onSubmit={handleSubmit} />
        </div>
    )
}