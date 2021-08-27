import React from 'react';

export const Card = ({
    className,
    bgColor,
    title,
    textColor,
    children,
    icon = '',
    ...props
}) => {
    return (
        <div
            className={`${
                className || ''
            } rounded-lg shadow-md overflow-hidden min-w-17 max-w-xl`}
            {...props}
        >
            <div
                className="h-28 p-4 flex justify-between"
                style={{ backgroundColor: bgColor }}
            >
                <h2 className={`self-end text-${textColor}`}>{title}</h2>
                {icon ? (
                    <img
                        className="self-start"
                        src={`/icons/card/${icon}.svg`}
                        width="40"
                    />
                ) : (
                    ''
                )}
            </div>
            <div className="p-4">{children}</div>
        </div>
    );
};
