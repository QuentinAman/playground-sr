import React, { useState } from 'react';
import { Icon } from '../';

/**
 * Component radio
 * @component
 *
 * @example
 *  <Radio
        values={[
            { text: 'First value', option: 'value1' },
            { text: 'Second value', option: 'value2' },
            { text: 'Third value', option: 'value3' },
        ]}
    />
 *
 * @type {React.FC<{
 *  values: [{ value: string, option: string}],
 *  name: string,
 *  className?: string
 * }>}
 */
export const Radio = ({ values, name, className, ...props }) => {
    const [selected, setSelected] = useState(values[0].option);

    return (
        <div {...props} className={className || ''}>
            {values.map((value) => (
                <label
                    className="cursor-pointer flex items-center relative"
                    htmlFor={value.option}
                    key={value.option}
                >
                    {selected == value.option && (
                        <Icon
                            src="checkedinput"
                            width="12px"
                            className="absolute left-3px top-4px events-none cursor-pointer"
                        />
                    )}
                    <input
                        id={value.option}
                        name={name}
                        type="radio"
                        checked={selected == value.option}
                        onChange={() => setSelected(value.option)}
                        className="appearance-none w-4 h-4 border-black border-2 rounded-full cursor-pointer mr-3"
                    />
                    {value.text}
                </label>
            ))}
        </div>
    );
};
