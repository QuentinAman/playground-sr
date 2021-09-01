import React from 'react';
import { Icon } from '..';

/**
 * Component information tag
 * @component
 *
 * @example
 *   <InformationTag color="blue" icon="arrow" text="Agriculture / Esp.Verts" />
 *
 * @type {React.FC<{
 *  text: String
 *  className?: String,
 *  icon?: String
 *  color?: "green"|"red"|"yellow"|"white"
 * }>}
 */
export const InformationTag = ({ className, color, text, icon, ...props }) => {
    return (
        <div
            className={` ${
                className || ''
            } flex w-max rounded-md py-0.5 px-2 text-xs items-center uppercase font-semibold prevent-hover cbg-${
                color || 'white'
            }`}
        >
            {icon && <Icon className="mr-1" width="11px" src={icon} />}
            {text}
        </div>
    );
};
