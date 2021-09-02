import { motion } from 'framer-motion';
import React from 'react';
import { Icon } from '../';

export const RemovableTag = ({ className, value, onClick, ...props }) => {
    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: 'max-content' }}
            exit={{ width: 0 }}
            {...props}
            className={`${
                className || ''
            } flex items-center px-1 py-0.5 rounded border-1 border-black cursor-pointer`}
        >
            <span className="text-sm font-semibold">{value}</span>
            <span onClick={onClick}>
                <Icon src="cross" className="ml-2" width="10px" />
            </span>
        </motion.div>
    );
};
