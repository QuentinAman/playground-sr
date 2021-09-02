import React from 'react'
import { Input } from '../Input'

export const InputPhone = ({ value, onInput, ...props }) => {

    /**
     * 
     * @param {React.FormEvent<HTMLInputElement>} e 
     */
    const handleInput = (e) => {
        const v = e.currentTarget.value
            .replace(/\D+/g, "")
            .slice(0, 10)
            .replace(/\d{2}/g, "$& ")
            .trim()

        onInput(v)
    }


    return (
        <Input placeholder="Téléphone" value={value} onInput={handleInput} {...props} type="tel"/>
    );
};
