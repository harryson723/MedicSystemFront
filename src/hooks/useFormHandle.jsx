import { useState } from "react";

export default function useFormHandle(initialForm, verifies) {
  const [form, setForm] = useState(initialForm);

  const handleForm = (e) => {
    const value = e.target.value;
    setForm({
      ...form,
      [e.target.name]: value,
    });
    console.log(verifies[e.target.name](value));
  };

  return { form, handleForm };
}
