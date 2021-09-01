import React from 'react';
import { Icon } from '../../atoms';

/**
 * Component Card
 * @component
 *
 * @example
 *  Card title={title} bgColor={bgColor} textColor={textColor} icon={icon}>
        <h3 className="mb-4 font-semibold">{subTitle}</h3>
        <p className="mb-3 text-sm">{description}</p>
        <Button className="mb-3">Visiter</Button>
        <div className="flex">
            {logoOrganizer.map((logo) => {
                return (
                    <img
                        className="mr-6"
                        src={`/images/organizers/${logo}`}
                    />
                );
            })}
        </div>
    </Card>
 *
 * @type {React.FC<{
 *  children: React.ReactNode,
 *  className?: String,
 *  title: String,
 *  textColor: String,
 *  bgColor: String,
 *  icon: String
 * }>}
 */
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
                    <Icon
                        className="self-start"
                        src={`card/${icon}`}
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
