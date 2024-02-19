import { useState } from "react";

export default function useFormHandle(initialForm) {
    const [form, setForm] = useState(initialForm);
    
    const handleForm = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return { form, handleForm };
}