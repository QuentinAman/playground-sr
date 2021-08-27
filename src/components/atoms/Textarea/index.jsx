import React from 'react';

import { RequiredField } from '../';

export const Textarea = ({ className, ...props }) => (
    <div className="relative textarea framed-item-p w-full">
        <textarea
            {...props}
            rows="5"
            className={`input resize-y w-full h-full px-5 py-2 ${
                className || ''
            }`}
        />
        {props.required && <RequiredField />}
    </div>
);
