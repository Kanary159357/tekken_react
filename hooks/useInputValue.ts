import { useState } from 'react';

export default function useEditValue(initialValue: any) {
    const [values, setValue] = useState(initialValue);
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setValue({
            ...values,
            [name]: value,
        });
    };

    return {
        values,
        handleChange,
        setValue,
    };
}
