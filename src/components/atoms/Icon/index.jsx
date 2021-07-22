import React from 'react';

export const Icon = ({ src, width, ...props }) => (
    <img
        {...props}
        src={`/icons/${src || 'default'}.svg`}
        width={width || '16px'}
    />
);
