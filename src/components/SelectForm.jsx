export default function SelectForm({ defaultV, options }) {
  return (
    <select
      name="documentType"
      id="documentType"
      className="border
        border-gray-300
        rounded-xl
        p-4 mt-3 mb-5
        bg-white"
      defaultValue={defaultV}
    >
      <option value={defaultV} disabled selected>
        {defaultV}
      </option>
      {options.map((option) => (
        <option value={option.value}>{option.label}</option>
      ))}
    </select>
  );
}
