import request from "../utils/request.js";

export default function ButtonSubmit({ value, handleSubmit }) {
    /*
  const data = request("http://127.0.0.1:8080/v1/api/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authentication": "Barer"
    },
    mode: "cors",
  });
  console.log(data);
  */
  return (
    <div className="flex items-center">
      <input
        className="
                border
                border-gray-300
                rounded-xl
                w-100 p-2 mt-3 mb-5 h-10
            "
        type="submit"
        value={value}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
