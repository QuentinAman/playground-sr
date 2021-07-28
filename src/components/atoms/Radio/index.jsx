import React, { useState } from 'react';
import { Icon } from '../';

export const Radio = ({ values, name, ...props }) => {
    const [selected, setSelected] = useState(values[0].option);

    return (
        <div {...props}>
            {values.map((value) => (
                <div className="flex items-center relative" key={value.option}>
                    {selected == value.option && (
                        <Icon
                            src="checkedradio"
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
                        className="appearance-none w-4 h-4 border-black border-2 rounded-full cursor-pointer"
                    />
                    <label
                        className="ml-3 cursor-pointer"
                        htmlFor={value.option}
                    >
                        {value.text}
                    </label>
                </div>
            ))}
        </div>
    );
};
