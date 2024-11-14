import { useState } from "react";

export const useForm = (initialObj = {}) => {

    // hook para cuando se llena el formulario
    const [form, setForm] = useState(initialObj);

    // Método que recibe un target que a su vez va a recibir un input
    const changed = ({ target }) => {
        const { name, value } = target;
        const keys= name.split('.')
        const updatedForm = { ...form };
        let current = updatedForm;

        for (let i = 0; i < keys.length - 1; i++) {
            if (!current[keys[i]]) {
                current[keys[i]] = {};
            }
            current = current[keys[i]];
        }

        current[keys[keys.length - 1]] = value;
        setForm(updatedForm)
    };

    // Método para resetear el formulario a su estado inicial
    const resetForm = () => {
        setForm(initialObj);
    };
    
    console.log('form', form)
    return {
        form,
        changed,
        resetForm
    }
}