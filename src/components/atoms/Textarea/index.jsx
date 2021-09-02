import React from 'react';

import { RequiredField } from '../';

/**
 * Component textarea
 * @component
 *
 * @example
 *  <Textarea required placeholder="Textarea" />
 *
 * @type {React.FC<{
 *  className?: string,
 *  required?: boolean
 *  onInput?: (value: string) => void
 *  value?: string
 *  max?: number
 * }>}
 */
export const Textarea = ({
    max,
    value = '',
    onInput,
    className = '',
    height = 'h-full',
    ...props
}) => {
    /**
     *
     * @param {React.FormEvent<HTMLInputElement>} e
     */
    const countChar = (e) => {
        if (!onInput) return;

        const val = e.currentTarget.value.slice(0, max);

        onInput(val);
    };

    return (
        <div>
            <div className="relative textarea framed-item-p w-full">
                <textarea
                    {...props}
                    rows="5"
                    className={`input resize-y w-full ${height} px-5 py-2 ${className}`}
                    onInput={countChar}
                    value={value}
                />
                {props.required && <RequiredField />}
            </div>
            {max && (
                <p className="font-thin text-xs text-right mt-2">
                    {value.length} / {max} caractères
                </p>
            )}
        </div>
    );
};
