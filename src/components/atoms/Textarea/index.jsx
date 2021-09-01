import React from 'react';

import { RequiredField } from '../';

/**
 * Component textarea
 * @component
 *
 * @example
 *   <Textarea required placeholder="Textarea" />
 *
 * @type {React.FC<{
 *  className?: String,
 *  required?: Boolean
 * }>}
 */
export const Textarea = ({ className, required, ...props }) => (
    <div className="relative textarea framed-item-p w-full">
        <textarea
            {...props}
            rows="5"
            className={`input resize-y w-full h-full px-5 py-2 ${
                className || ''
            }`}
        />
        {required && <RequiredField />}
    </div>
);
