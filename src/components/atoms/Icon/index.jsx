import React from 'react';

export const Icon = ({ src, className, width, ...props }) => (
    <img
        {...props}
        className={className}
        src={`/icons/${src || 'default'}.svg`}
        width={width || '16px'}
    />
);
