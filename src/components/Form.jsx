export default function Form({ children }) {
  return (
    <div className="w-full">
      <h1 className="font-bold text-4xl mb-9">MEDIC SYSTEM</h1>
      <br />
      <form
        className="
                border
                rounded-xl p-14 pl-56
                w-full grid grid-cols-3 gap-4
                ">
                    {children}
      </form>
    </div>
  );
}
