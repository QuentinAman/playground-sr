import React from 'react';

/**
 * Component button
 * @component
 *
 * @example
 *   <Button width="w-full" color="blue">My button</Button>
 *
 * @type {React.FC<{
 *  children: React.ReactNode,
 *  className?: String,
 *  width?: String,
 *  color?: "green"|"red"|"yellow"|"white"
 * }>}
 */
export const Button = ({ color, className, width = 'w-max', ...props }) => (
    <button
        {...props}
        className={`${color ? `cbg-${color}` : 'cbg-white'} ${
            className || ''
        } ${width} ${color === "blue" ? "text-white" : "text-black"} button framed-item-p font-bold uppercase`}
    />
);
