import React from 'react';

export const Button = ({ color, className, ...props }) => (
    <button
        {...props}
        className={`${color ? `cbg-${color}` : 'cbg-white'} ${
            className || ''
        } button framed-item-p font-bold uppercase button-max`}
    />
);
