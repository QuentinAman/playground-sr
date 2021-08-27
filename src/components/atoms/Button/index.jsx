import React from 'react';

export const Button = ({ color, className, ...props }) => (
    <button
        {...props}
        className={`${color ? `cbg-${color}` : 'cbg-white'} ${
            className || ''
        } button framed-item font-bold uppercase button-max`}
    />
);
