import React from 'react';

export const Button = ({ color, className, width = 'w-max', ...props }) => (
    <button
        {...props}
        className={`${color ? `cbg-${color}` : 'cbg-white'} ${
            className || ''
        } ${width} ${color === "blue" ? "text-white" : "text-black"} button framed-item-p font-bold uppercase`}
    />
);
