import React from 'react';

/**
 * Component icon
 * @component
 *
 * @example
 *   <Icon width="12px" src="arrow"/>
 *
 * @type {React.FC<{
 *  src: String,
 *  className?: String,
 *  width?: String;
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
