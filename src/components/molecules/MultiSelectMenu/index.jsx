import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { SelectMenu, RemovableTag } from '../../atoms';

/**
 * Component multi select menu
 * @component
 *
 * @example
 *  <MultiSelectMenu
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
 *  selectedValues: [{text: string, option: string}],
 *  setSelectedValues: Function,
 *  placeholder?: string,
 *  values: [{text: string, option: string}]
 *  className?: string,
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
        const newArray = values.filter(
            (x) => !selectedValues.find((y) => y.option === x.option),
        );
        setRemainingValues(newArray);
    }, [selectedValues]);

    return (
        <div {...props}>
            <SelectMenu
                placeholder={placeholder}
                values={remainingValues}
                setSelected={(value) => handleSelectedValue('add', value)}
            />
            <div className="flex flex-wrap mt-3">
                <AnimatePresence>
                    {selectedValues.map(({ text }, index) => (
                        <RemovableTag
                            value={text}
                            key={index}
                            onClick={() => handleSelectedValue('remove', index)}
                        />
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};
