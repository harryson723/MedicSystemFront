import { useEffect } from "react";

const icons = {
  error: "pi-times",
  success: "pi-check",
};

const colors = {
  error: {
    text: "#cf3e3e",
    border: "#f33e3e",
  },
  success: {
    text: "#82ce34",
    border: "#98f33e",
  },
};

export default function Alert({ alert, setShowAlert }) {
  const theme = `pi ${icons[alert.type]}
    absolute bottom-[80%]
    text-[#6daa2f] alert-icon`;

  useEffect(() => {
    if (alert.show) {
      document.getElementById("alert-text").style.borderColor =
        colors[alert.type].border;
      document.getElementById("alert-icon").style.borderColor =
        colors[alert.type].border;
      document.getElementById("alert-icon").style.color =
        colors[alert.type].text;
      setTimeout(
        () => {
          document.getElementById("alert-container").classList.add("salida");
          setShowAlert({
            ...alert,
            show: false
          });
        },
        3000
      );
    }
  }, []);

  return (
    <>
      <div className="absolute right-0  mt-0 bg-white alert-container ">
        <div id="alert-container">
          <div className={`alert-icon-container `}>
            <i id="alert-icon" className={theme}></i>
          </div>
          <div
            id="alert-text"
            className="border border-solid
          rounded-2xl flex items-center
          justify-start p-10 overflow-hidden"
          >
            <span className="alert-text">{alert.message}</span>
          </div>
        </div>
      </div>
    </>
  );
}
