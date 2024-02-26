let verify = 0;

const showErrorForm = (element, value) => {
  console.log(element.value);
  if (element.value == value) {
    element.classList.add("input-error");
    if (element.nextElementSibling)
      element.parentElement.removeChild(element.nextElementSibling);
    const span = document.createElement("span");
    span.classList.add("span-error");
    span.textContent = "* Este campo es obligatorio";
    element.insertAdjacentElement("afterend", span);
    verify++;
    return;
  }

  if (element.nextElementSibling)
    element.parentElement.removeChild(element.nextElementSibling);
  element.classList.remove("input-error");
};

const verifyForm = (parent) => {
  verify = 0;
  const inputs = parent.querySelectorAll("input");
  const selects = parent.querySelectorAll("select");
  inputs.forEach((input) => showErrorForm(input, ""));
  selects.forEach((select) => showErrorForm(select, "Seleccione"));
  return verify == 0;
};

const verifyNumber = (text) => /^\d{10,11}$/.test(text);

export default verifyForm;

export {
    verifyNumber,
}
