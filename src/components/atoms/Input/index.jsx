import React from 'react';
import { RequiredField } from '../';

/**
 * Component Input
 * @component
 *
 * @example
 *   <Input placeholder="Email" required />
 *
 * @type {React.FC<{
 *  className?: String,
 *  placeholder?: String,
 *  required?: Boolean
 * }>}
 */
export const Input = ({ className, required, ...props }) => {
    return (
        <div className={`framed-item-p w-full relative ${className || ''}`}>
            <input {...props} className="input h-full" />
            {props.required && <RequiredField />}
        </div>
    );
};
