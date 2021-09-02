import React, { useState } from 'react';
import { Icon } from '../Icon';
import { RequiredField } from '../RequiredField';

/**
 * Component select menu
 * @component
 *
 * @example
 *  <SelectMenu
        selected={selectedValue}
        setSelected={setSelectedValue}
        values={[
            { text: 'First value', option: 'value1' },
            { text: 'Second value', option: 'value2' },
            { text: 'Third value', option: 'value3' },
            { text: 'Fourth value', option: 'value4' },
            { text: 'Fifth value', option: 'value5' },
            { text: 'Sixth value', option: 'value6' },
            { text: 'Seventh value', option: 'value7' },
        ]}
    />
 *
 * @type {React.FC<{
 *  required: Boolean,
 *  className?: string,
 *  selected: {text: string, option: string},
 *  setSelected: Function,
 *  values: [{text: String, option: String}],
 *  placeholder?: String,
 *  width?: string
 * }>}
 */
export const SelectMenu = ({
    required,
    className = '',
    color = 'gray-50',
    selected,
    setSelected,
    values,
    placeholder = '',
    width = 'w-full',
    ...props
}) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div
            {...props}
            className={`border-1 rounded border-black ${width} font-semibold select-none h-max relative ${className}`}
        >
            <div
                className={`relative pr-10 pl-2 cursor-pointer py-3 rounded bg-${color}`}
                onClick={() => setIsVisible(!isVisible)}
            >
                <p className="max-w-94 text-sm">
                    {selected ? selected.text : placeholder}
                </p>
                <Icon
                    src="arrow"
                    width="12px"
                    className={`transition-transform duration-300 absolute right-3 transform top-1/2 -translate-y-1/2 ${
                        isVisible ? 'rotate-180' : 'rotate-0'
                    }`}
                />
            </div>
            <ul
                className={`overflow-scroll absolute bg-white top-full right-0 left-0 transition-all duration-300 max-h-0 z-10 ${
                    isVisible &&
                    'max-h-32 transition-max-h border rounded  border-black'
                }`}
            >
                {values.map((value) => (
                    <li
                        className={`py-1 my-1 text-sm px-2 ${
                            value.option == selected
                                ? 'bg-gray-100'
                                : 'hover:bg-gray-300 cursor-pointer transition-colors duration-150'
                        }`}
                        onClick={() => {
                            setSelected(value);
                            setIsVisible(false);
                        }}
                        key={value.option}
                    >
                        {value.text}
                    </li>
                ))}
            </ul>
            {required && <RequiredField />}
        </div>
    );
};
