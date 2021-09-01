import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Icon, SelectMenu } from '../';

/**
 * Component multi select menu
 * @component
 *
 * @example
 *   <MultiSelectMenu
        placeholder="Select one or more values"
        selectedValues={multiSelectedValues}
        setSelectedValues={setMultiSelectedValues}
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
 *  selectedValues: [{text: String, option: String}],
 *  setSelectedValues: Function,
 *  placeholder?: String,
 *  values: [{text: String, option: String}]
 *  className?: String,
 * }>}
 */
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
                {...props}
                placeholder={placeholder}
                values={remainingValues}
                className="mb-2"
                setSelected={(value) => handleSelectedValue('add', value)}
            />
            <div className="flex gap-2 flex-wrap">
                {selectedValues.map(({ text }, index) => (
                    <AnimatePresence>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: 'max-content' }}
                            exit={{ width: 0 }}
                            {...props}
                            className={`${
                                className || ''
                            } flex items-center px-1 py-0.5 rounded border-1 border-black`}
                        >
                            <span className="text-sm font-semibold whitespace-nowrap">
                                {text}
                            </span>
                            <span
                                onClick={() =>
                                    handleSelectedValue('remove', index)
                                }
                            >
                                <Icon
                                    src="cross"
                                    className="ml-2 cursor-pointer"
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
