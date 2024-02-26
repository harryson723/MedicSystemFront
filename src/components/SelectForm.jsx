export default function SelectForm({ id, defaultV, options }) {
  return (
    <select
      name={id}
      id={id}
      className="border
        border-gray-300
        rounded-xl
        p-4 mt-3 mb-5 pr-11
        bg-white block w-[75%]"
      defaultValue={defaultV}
    >
      <option value={defaultV} disabled>
        {defaultV}
      </option>
      {options.map((option, index) => (
        <option key={option + index} value={option.value}>{option.label}</option>
      ))}
    </select>
  );
}