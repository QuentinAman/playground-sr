import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { Input, Icon } from '../';
import { ListElement } from '../ListElement';

export const InputList = ({
    className,
    placeholder,
    selectedValues,
    setSelectedValues,
    ...props
}) => {
    let [value, setValue] = useState('');

    const handleValues = (value, action) => {
        let newValues = [...selectedValues];
        switch (action) {
            case 'add':
                newValues.push(value);
                break;
            case 'remove':
            default:
                newValues.splice(newValues.indexOf(value), 1);
                break;
        }

        setValue('');
        setSelectedValues(newValues);
    };

    return (
        <div className="w-full flex flex-col">
            <div {...props} className={`relative w-full`}>
                <Input
                    value={value}
                    setValue={setValue}
                    style={{ paddingRight: '1em' }}
                    className={`${className || ''} `}
                    placeholder={placeholder}
                />
                <Icon
                    onClick={() =>
                        handleValues({ value: value, text: value }, 'add')
                    }
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    src="plus"
                />
            </div>
            <div className="flex flex-col w-full mt-3">
                <AnimatePresence>
                    {selectedValues.map((value, index) => (
                        <ListElement
                            content={value}
                            key={index}
                            onClick={() => handleValues(value, 'remove')}
                        />
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};
