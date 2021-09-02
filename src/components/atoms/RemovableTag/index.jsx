import { motion } from 'framer-motion';
import React from 'react';
import { Icon } from '../';

/**
 * Component RemovableTag
 * @component
 *
 * @example
 *  <RemovableTag
        onClick={() =>
            handleValues(value, 'remove')
        }
        value={value}
        key={index}
    />
 *
 * @type {React.FC<{
    *  value: string,
    *  onClick: () => void,
    *  className?: string
    * }>}
    */
export const RemovableTag = ({ className, value, onClick, ...props }) => {
    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: 'max-content' }}
            exit={{ width: 0 }}
            {...props}
            className={`${
                className || ''
            } rounded border-1 border-black cursor-pointer mr-1 overflow-hidden mb-1`}
        >
            <div className="px-1 py-0.5 flex items-center">
                <span className="text-sm font-semibold">{value}</span>
                <span onClick={onClick}>
                    <Icon src="cross" className="ml-2" width="10px" />
                </span>
            </div>
        </motion.div>
    );
};
