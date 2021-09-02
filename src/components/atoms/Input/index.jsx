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
 *  className?: String,
 *  placeholder?: String,
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
                className="input h-full"
            />
            {required && <RequiredField />}
        </div>
    );
};
