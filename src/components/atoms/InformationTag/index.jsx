import React from 'react';
import { Icon } from '..';

export const InformationTag = ({ color, text, icon }) => {
    return (
        <div
            className={`flex rounded-md py-0.5 px-2 text-xs items-center uppercase font-semibold prevent-hover cbg-${
                color || 'white'
            }`}
        >
            {icon && <Icon className="mr-1" width="11px" src={icon} />}
            {text}
        </div>
    );
};
