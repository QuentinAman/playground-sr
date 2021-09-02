import React from 'react';
import { Button } from '../../atoms';
import { Card } from '../../molecules';

/**
 * Component slot
 * @component
 *
 * @example
 *  <Slot
        status="available"
        hours="14h00 - 14h15"
        onClick={() => console.log('available')}
    />
 *
 * @type {React.FC<{
 *  status: "available"|"unavailable"|"waiting"|"busy"|"confirmed",
 *  title: string,
 *  bgColor: string,
 *  textColor?: string,
 *  className?: string,
 *  icon: string,
 *  subTitle: string,
 *  description: string,
 *  logoOrganizer: [string]
 */
export const AreaCard = ({
    title,
    bgColor,
    textColor = 'black',
    className,
    icon,
    subTitle,
    description,
    logoOrganizer = [],
    ...props
}) => {
    return (
        <Card
            {...props}
            className={className || ''}
            title={title}
            bgColor={bgColor}
            textColor={textColor}
            icon={icon}
        >
            <h3 className="mb-4 font-semibold">{subTitle}</h3>
            <p className="mb-3 text-sm">{description}</p>
            <Button className="mb-3">Visiter</Button>
            <div className="flex">
                {logoOrganizer.map((logo, index) => {
                    return (
                        <img
                            className="mr-6"
                            key={index}
                            src={`/images/organizers/${logo}`}
                        />
                    );
                })}
            </div>
        </Card>
    );
};
