let verify = 0;

const showErrorForm = (element, verify) => {
  const flag = verify(element.value);
  if (flag != true) {
    element.classList.add("input-error");
    if (element.nextElementSibling)
      element.parentElement.removeChild(element.nextElementSibling);
    const span = document.createElement("span");
    span.classList.add("span-error");
    span.textContent = flag;
    element.insertAdjacentElement("afterend", span);
    verify++;
    return;
  }

  if (element.nextElementSibling)
    element.parentElement.removeChild(element.nextElementSibling);
  element.classList.remove("input-error");
};

const verifyForm = (parent, verifies) => {
  verify = 0;
  const inputs = parent.querySelectorAll("input");
  const selects = parent.querySelectorAll("select");
  inputs.forEach((input) => {
    if (input.name != "") showErrorForm(input, verifies[input.name]);
  });
  selects.forEach((select) => {
    if (select.name != "") showErrorForm(select, verifies[select.name]);
  });
  return verify == 0;
};

const verifyText = (text) => {
  if (text != "") return true;
  return "* Este campo es obligatorio";
};

const verifyEmail = (text) => {
  const verify = verifyText(text);
  if (verify != true) return verify;
  if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(text)) return true;
  return "Ingrese un email valido";
};

const verifyNumber = (text) => {
  const verify = verifyText(text);
  if (verify != true) return verify;
  if (/^[0-9]+$/.test(text)) return true;
  return "Solo se permiten numeros";
};

const verifyPhone = (text) => {
  const verify = verifyText(text);
  if (verify != true) return verify;
  if (/^\d{7,10}$/.test(text)) return true;
  return "Formato invalido 3105671039";
};

const verifyDocument = (text) => {
  const verify = verifyNumber(text);
  if (verify != true) return verify;
  if (/^\d{10,12}$/.test(text)) return true;
  return "El numero tener de 10 a 12 carácteres";
};

const verifySelect = (text) => {
  if (/^(?!Seleccione$).*/.test(text)) return true;
  return "* Debe seleccionar una opción";
};

const verifyPassword = (text) => {
  const verify = verifyText(text);
  if (verify != true) return verify;
  if (
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,}$/.test(
      text
    )
  )
    return true;
  return "Ingrese al menos un número, mayúscula y caracter especial, Mínimo 8 caracteres";
};

export default verifyForm;

export {
  verifyNumber,
  verifyDocument,
  showErrorForm,
  verifySelect,
  verifyText,
  verifyPhone,
  verifyEmail,
  verifyPassword,
};
