import { motion } from 'framer-motion';
import React from 'react';
import { Icon } from '../';

/**
 * Component ListElement
 * @component
 *
 * @example
 *  <ListElement
        content={value}
        key={index}
        onClick={() =>
            handleValues(value, 'remove')
        }
    />
 *
 * @type {React.FC<{
 *  className?: string,
 *  icon?: string,
 *  content: {value: string, text: string},
 *  onClick: () => void
 * }>}
 */
export const ListElement = ({
    className,
    icon = 'link',
    content,
    onClick,
    ...props
}) => {
    return (
        <motion.div
            {...props}
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ width: 0 }}
            className={`${className || ''} border-b-1`}
        >
            <div className="w-full grid grid-cols-list-element items-center pb-1.5 overflow-hidden">
                <a href={content.value}>
                    <Icon src={icon} width="12px" />
                </a>
                <p className="px-2 text-sm">{content.text}</p>
                <Icon
                    src="remove"
                    className="cursor-pointer"
                    width="14px"
                    onClick={onClick}
                />
            </div>
        </motion.div>
    );
};
