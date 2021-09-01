import React from 'react';
import { Icon } from '../';

/**
 * Component checkbox
 * @component
 *
 * @example
 *  <Checkbox
 *      isChecked={checked}
 *      label="Label"
 *      name="Name"
 *      setIsChecked={updateChecked}
 *  />
 *
 * @type {React.FC<{
 *  isChecked: Boolean,
 *  setIsChecked: Function,
 *  name?: String,
 *  label?: String,
 *  className?: String
 * }>}
 */
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
        className={`${className} flex items-center ml-3 cursor-pointer relative select-none`}
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
