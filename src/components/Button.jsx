export default function Button({ text, onclick }) {
    return (
        <button className="
        border border-gray-300 rounded-xl
        w-100 p-2 px-10 mt-8 mb-4
        bg-[#66b1e4] text-white
        btn-submit" onClick={onclick}>
            {text}
        </button>
    )
}