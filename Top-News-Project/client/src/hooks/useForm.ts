import { useState } from "react";

interface FormState {
    [key: string]: string;
}

export function useForm<T extends FormState>(initialState: T) {
    const [formData, setFormData] = useState<T>(initialState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const resetForm = () => {
        setFormData(initialState);
    };

    return {
        formData,
        handleChange,
        resetForm,
    };
}
