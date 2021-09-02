import React from 'react';
import { Icon } from '../Icon';

/**
 * Component modal
 * @component
 *
 * @example
 *  <Modal title="Log in">Log in form</Link>
 *
 * @type {React.FC<{
 *  title: string,
 *  className?: string,
 *  children: React.ReactNode
 * }>}
 */
export const Modal = ({ children, title, className, ...props }) => {
    return (
        <div
            className={`min-w-21 rounded-l shadow-lg px-6 py-8 bg-white relative
            ${className || ''}`}
            {...props}
        >
            <h2 className="pb-8">{title}</h2>
            <div className="transform hover:scale-30 bg-black transition-all duration-100 w-max rounded-full absolute p-2.5 -right-4 -top-4">
                <Icon src="cross-white" width="14"></Icon>
            </div>
            {children}
        </div>
    );
};
