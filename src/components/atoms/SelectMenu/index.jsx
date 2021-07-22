import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { Icon } from '../Icon';

export const SelectMenu = ({ values, ...props }) => {
    const [selected, setSelected] = useState(values[0].option);
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div
            {...props}
            className="border-1 rounded border-black min-w-14 font-semibold select-none"
        >
            <div
                className={` relative px-2 cursor-pointer py-3 text-sm rounded border-black bg-gray-50 ${
                    isVisible && 'border-b-1'
                }`}
                onClick={() => setIsVisible(!isVisible)}
            >
                {values.find((el) => el.option == selected).text}
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
                    isVisible && 'max-h-64'
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
                            setSelected(value.option);
                            setIsVisible(false);
                        }}
                    >
                        {value.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};
