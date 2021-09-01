import React from 'react';

/**
 * Component divider
 * @component
 *
 * @example
 *  <Divider bottom right>
        <Button>Button 1</Button>
        <Button>Button 2</Button>
    </Divider>
 *
 * @type {React.FC<{
 *  className?: String,
 *  children: React.ReactNode,
 *  right?: String,
 *  bottom?: String;
 * }>}
 */
export const Divider = ({ children, className, right, bottom, ...props }) => {
    return (
        <div
            {...props}
            className={`${className || ''} w-full flex ${
                right ? 'flex-row-reverse' : ''
            } gap-3`}
        >
            {children}
            <div
                className={`border-solid w-full border-b self-${
                    bottom ? 'end' : 'center'
                } border-black`}
            ></div>
        </div>
    );
};
