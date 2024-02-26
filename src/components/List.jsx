import Row from "./Cell";
import Colunm from "./Columns";

export default function List({ children, data, title = '' }) {

  return (
    <>
      {data && (
        <div className="w-full relative flex flex-col shadow-lg mb-6">
          {title &&
            <div className="flex flex-wrap items-center">
              <div className="font-semibold text-lg p-4 m-4">
                <h3>{title}</h3>
              </div>
            </div>}
          <div className="block bg-transparent m-4 p-4 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border border-solid border-x-0 ">
                  <Colunm></Colunm>
                  {children}
                </tr>
              </thead>
              <tbody>
                {data}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}
