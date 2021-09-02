import React from 'react';
import { Icon } from '../';

export const ListElement = ({
    className,
    icon = 'link',
    content,
    onClick,
    ...props
}) => {
    return (
        <div
            {...props}
            className={`${
                className || ''
            } w-full grid grid-cols-list-element items-center border-b-1 pb-1.5`}
        >
            <a href={content.value}>
                <Icon src={icon} width="12px" />
            </a>
            <p className="px-2 text-sm">{content.text}</p>
            <Icon
                src="remove"
                className="cursor-pointer"
                width="14px"
                onClick={onClick}
            />
        </div>
    );
};
