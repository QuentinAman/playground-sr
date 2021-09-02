import React from 'react';
import { RequiredField } from '../';

/**
 * Component Input
 * @component
 *
 * @example
 *  <Input placeholder="Email" required />
 *
 * @type {React.FC<{
 *  className?: string,
 *  placeholder?: string,
 *  required?: Boolean,
 *  value: string,
 *  setValue: (value: string) => void
 * }>}
 */
export const Input = ({
    className,
    value = '',
    setValue = () => {},
    placeholder,
    required,
    ...props
}) => {
    return (
        <div className={`framed-item-p w-full relative ${className || ''}`}>
            <input
                {...props}
                value={value}
                onChange={(e) => setValue(e.currentTarget.value)}
                placeholder={placeholder}
                className="input"
            />
            {required && <RequiredField />}
        </div>
    );
};
