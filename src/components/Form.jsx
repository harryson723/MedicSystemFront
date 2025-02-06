export default function Form({ children, title = "Medic System" }) {
  return (
    <div className="w-full relative flex flex-col shadow-lg mb-6">
      <div className="flex flex-wrap items-center">
        <div className="font-semibold text-lg p-4 m-4">
          <h3>{title}</h3>
        </div>
      </div>
      <form
        className="
                border border-solid border-l-0 border-r-0
                w-auto grid grid-cols-3 gap-4
                bg-transparent m-4 p-4 overflow-x-auto
                ">
        {children}
      </form>
    </div>
  );
}
