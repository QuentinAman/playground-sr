import React from 'react';

export const Button = ({ color, ...props }) => (
    <button
        {...props}
        className={`${
            color ? `cbg-${color}` : 'cbg-white'
        } button framed-item font-bold uppercase`}
    />
);
