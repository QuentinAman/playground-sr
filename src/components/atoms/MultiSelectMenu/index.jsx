import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { SelectMenu, RemovableTag } from '../';

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
            <div>
                <AnimatePresence>
                    {selectedValues.map(({ text }, index) => (
                        <RemovableTag
                            value={text}
                            onClick={() => handleSelectedValue('remove', index)}
                        />
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};
