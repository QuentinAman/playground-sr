import React from 'react';
import { RequiredField } from '../';

export const Input = ({ className, ...props }) => {
    return (
        <div className={`framed-item relative ${className || ''}`}>
            <input {...props} className="input" />
            {props.required && <RequiredField />}
        </div>
    );
};
