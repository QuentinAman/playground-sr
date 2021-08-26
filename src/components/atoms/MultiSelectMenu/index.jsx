import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Icon, SelectMenu } from '../';

export const MultiSelectMenu = ({
    selectedValues,
    setSelectedValues,
    placeholder,
    values,
    className,
    ...props
}) => {
    const [remainingValues, setRemainingValues] = useState([]);

    const handleSelectedValue = (type, value) => {
        let newSelectedValues = [...selectedValues];

        switch (type) {
            case 'add':
                newSelectedValues.push(value);
                break;
            case 'remove':
                newSelectedValues.splice(value, 1);
            default:
                break;
        }

        setSelectedValues(newSelectedValues);
    };

    useEffect(() => {
        const newArray = values.filter((x) => !selectedValues.includes(x));
        setRemainingValues(values.filter((x) => !selectedValues.includes(x)));
    }, [selectedValues]);

    return (
        <div>
            <SelectMenu
                placeholder={placeholder}
                values={remainingValues}
                setSelected={(value) => handleSelectedValue('add', value)}
            />
            <div>
                {selectedValues.map(({ text }, index) => (
                    <AnimatePresence>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: 'max-content' }}
                            exit={{ width: 0 }}
                            {...props}
                            className={`${
                                className || ''
                            } flex items-center px-1 py-0.5 rounded border-1 border-black cursor-pointer`}
                        >
                            <span className="text-sm font-semibold">
                                {text}
                            </span>
                            <span
                                onClick={() =>
                                    handleSelectedValue('remove', index)
                                }
                            >
                                <Icon
                                    src="cross"
                                    className="ml-2"
                                    width="10px"
                                />
                            </span>
                        </motion.div>
                    </AnimatePresence>
                ))}
            </div>
        </div>
    );
};