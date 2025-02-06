
export default function ButtonSubmit({ value, handleSubmit, type = "submit"  }) {
  return (
    <div className="flex justify-end col-span-3 w-[92%]">
      <input
        className="
                border border-gray-300 rounded-xl
                w-100 p-2 px-10 mb-4
                bg-[#66b1e4] text-white
                btn-submit
            "
        type={type}
        value={value}
        onClick={handleSubmit}
      />
    </div>
  );
}
