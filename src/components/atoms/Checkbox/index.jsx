import React from 'react';
import { Icon } from '../';

export const Checkbox = ({
    isChecked,
    setIsChecked,
    name,
    label,
    className = '',
    ...props
}) => (
    <label
        {...props}
        className={`${className} flex items-center ml-3 cursor-pointer relative`}
    >
        {isChecked && (
            <Icon
                src="checkedinput"
                width="14px"
                className="absolute left-2.5px top-2.5px events-none cursor-pointer"
            />
        )}
        <input
            type="checkbox"
            name={name}
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            className="appearance-none w-4 h-4 border-black border-2 rounded cursor-pointer mr-3"
        />
        {label}
    </label>
);
