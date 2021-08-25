import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { Icon } from '../Icon';
import { RequiredField } from '../RequiredField';

export const SelectMenu = ({
    required,
    selected,
    setSelected,
    values,
    placeholder = '',
    ...props
}) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div
            {...props}
            className="border-1 rounded border-black min-w-14 font-semibold select-none h-max relative"
        >
            <div
                className={`relative px-2 cursor-pointer py-3 rounded border-black bg-gray-50 ${
                    isVisible && 'border-b-1'
                }`}
                onClick={() => setIsVisible(!isVisible)}
            >
                <p className="max-w-94 text-sm">
                    {selected ? selected.text : placeholder}
                </p>
                <Icon
                    src="arrow"
                    width="12px"
                    className={`transition-transform duration-300 absolute right-3 top-4 ${
                        isVisible ? 'rotate-180' : 'rotate-0'
                    }`}
                />
            </div>
            <ul
                className={`overflow-scroll transition-all duration-300 max-h-0 ${
                    isVisible && 'max-h-32'
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
