import { useState } from "react";
import { showErrorForm } from "../utils/verifyForm";

export default function useFormHandle(initialForm, verifies) {
  const [form, setForm] = useState(initialForm);

  const handleForm = (e) => {
    const value = e.target.value;
    setForm({
      ...form,
      [e.target.name]: value,
    });
    showErrorForm(e.target, verifies[e.target.name]);
  };

  return { form, handleForm, setForm };
}
