import React from 'react';

/**
 * Component icon
 * @component
 *
 * @example
 *  <Icon width="12px" src="arrow"/>
 *
 * @type {React.FC<{
 *  src: string,
 *  className?: string,
 *  width?: string;
 * }>}
 */
export const Icon = ({ src, className, width, ...props }) => (
    <img
        {...props}
        className={className}
        src={`/icons/${src || 'default'}.svg`}
        width={width || '16px'}
    />
);
